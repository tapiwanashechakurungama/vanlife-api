import User from "./../models/userModel.mjs"


//create user
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json("All field are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json("The email already in use");
    } else {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
// find a specific user by id

const getUserById = async (req, res) => {

  const { id } = req.params

  try {

    const user = await User.findById(id)
    res.status(200).json(user)
    
  } catch (error) {
    res.status(500).json(error)
  }
};

//get all user

const getAllUser = async(req,res)=>{
  try {

    const allUsers = await User.find({})
    res.status(200).json(allUsers);
    
  } catch (error) {
    res.status(500).json(error)
  }
}

//delete a specific user by id

const deleteUser = async(req,res)=>{
  try {

    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    res.status(200).json("User deleted")
    
  } catch (error) {
    res.status(500).json(error)
  }
}

//update a specific user by id 

const updateuser = async(req,res)=>{
  try {

    const { id } = req.params
    const updateUser = await User.findByIdAndUpdate(id,req.body)
    if(updateUser){
      const newuser = await User.findById(id)
      res.status(200).json(newuser)
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}
export { createUser, getUserById, getAllUser, deleteUser, updateuser };