import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "./ui/card"
import { Label } from "./ui/label"
import { Alert, AlertTitle, AlertDescription } from "./ui/alert"
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SERVERURL = 'http://localhost:5000';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState({status:false, title: '', description: '' , variant:'default'});
  useEffect (()=>{
    const fetchData = async() => {
      try{
        const response = await axios.get(
          `${SERVERURL}/api/users`, {mode: 'cors'});
        console.log(response.data);
        setUsers(response.data);
        setLoading(false); // set loading to false after fetching.
      } catch(error){
        console.error("Error fetching users:",error);
        setLoading(false);
      }
    }
    fetchData();
  },[]);
  // for add <form>
    
  const [isPopupOpen,setIsPopupOpen] = useState({status: false, action: 'none'});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData)=>({...prevData, [name]:value}));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.username || !formData.password){
      setShowAlert({...showAlert, status : true, title: 'Empty Field', description: 'fill all fields.', variant: 'destructive'});
      setInterval(()=>{
        setShowAlert({...showAlert, status:false, title: '', description:'', variant:'default'});
      },5000);
      return;
    }
    
    try{
      const response = await axios.post(`${SERVERURL}/api/users`,formData,{mode: 'cors'});
      if(response.data.success){
        formData['id'] = response.data.id;
        setUsers((users)=> [...users,formData]);
      } 
      setShowAlert({...showAlert, status:true, title: response.data.success?'Success':'Failed',description: response.data.message , variant: response.data.message?'default': 'destructive'});
      setInterval(()=>{setShowAlert({...showAlert, status:false})},5000);
      setFormData({name: '', email: '', username: '', password: ''});
      // setIsPopupOpen(false);
    }catch(error){

      console.log("Error:", error);
    }
  }

  const togglePopup = () => setIsPopupOpen({status: isPopupOpen.status? false: true}); // toggle popup visibility

  const handleDelete = async(userId)=>{
    try{
      const response = await axios.delete(`${SERVERURL}/api/users?id=${userId}`, {mode:'cors'});
      if(response.data.success){
        setUsers((prevUsers)=>prevUsers.filter((user)=>user.id !==userId));
        console.log(response);
        setShowAlert({...showAlert, status:true, title: response.data.success?'Success':'Failed',description: response.data.message, variant: response.data.message?'default': 'destructive'});
        setInterval(()=>{setShowAlert({...showAlert, status:false})},5000);
      }
    } catch(error) {
      console.error("Error Deleting User:",error);
    }
  }
  // render
  if(loading){
    return <div>Loading ...</div>;
  }

  return (
    <>

      <h1 className="text-center">User list</h1>
      <div className="flex justify-center my-3">
        <Button 
          className="bg-green-100 border-green-500 hover:bg-green-200 hover:border-green-700 text-black"
          onClick={togglePopup} 
        >Add User</Button>
      </div>
      <section>
      <div className="flex flex-wrap justify-center gap-2">
        {users.map(user => (
          <Card key={user.id} className="w-[300px]">
            <CardHeader>
              <CardTitle>{user.name}</CardTitle> 
            </CardHeader>
            <CardContent>
              <Label>Email:</Label>
              <CardDescription>{user.email}</CardDescription>
              <Label>Username:</Label>
              <CardDescription>{user.username}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="border-sky-500" variant="outline">Modify</Button>
              <Button
                  className="bg-red-100 border-red-500 hover:bg-red-200 hover:border-red-700 text-black"
                  onClick={()=>handleDelete(user.id)}
              >Delete</Button>
            </CardFooter>
          </Card>
        ))
        }
      </div>

      { showAlert.status && (
        <div className="fixed top-4 right-4 z-50">
          <Alert variant={showAlert.variant}>
            <AlertTitle>{showAlert.title}</AlertTitle>
            <AlertDescription>{showAlert.description}</AlertDescription>
          </Alert>
        </div>
      )}

      { isPopupOpen.status &&(
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
        >
          <Card >
            <CardHeader>
              <CardTitle>Add new user</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" onChange={handleInputChange}/>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" onChange={handleInputChange}/>
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" type="text" onChange={handleInputChange}/>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" onChange={handleInputChange}/>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                className="bg-red-100 border-red-500 hover:bg-red-200 hover:border-red-700 text-black" 
                onClick={togglePopup}
              >Cancel</Button>
              <Button
                className="bg-green-100 border-green-500 hover:bg-green-200 hover:border-green-700 text-black"
                onClick={handleSubmit}>Add User</Button>
            </CardFooter>
          </Card>
        </div>
      )}
      </section>
    </>
  );
}
export default UsersList;
