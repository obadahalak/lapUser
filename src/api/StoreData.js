import axios from "axios";

export const getProducts = async (set, setError) => {
    return await axios.get('lab-scope/store')
    .then(res => {
      set(res.data.data);
    })
    .catch(err => {
      // setError(err.response.data);
    }); 
}


export const addProduct = async (data, set, setError) => {
  console.log(data);
  return await axios.post('lab-scope/store-store', data,{
    headers:{
      "Content-Type": "multipart/form-data",
    }
  })
  .then(res => {
    // set(res.data);
  })
  .catch(err => {
    // setError(err.response.data);
  }); 
}


export const getAllTestUnits = async (set, setError) => {
  return await axios
  .get(`lab-scope/get-TestUnits`)
  .then((response) => {
    set(response.data);
  })
  .catch((err) => {
    // console.log("data");
  });
}

export const outProduct = async (id, data, setError) => {
  return await axios
  .post(`lab-scope/quantity-update/${id}`, data)
  .then((response) => {
    // set(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
}

export const deleteProduct = async (id, set, setError) => {
  return await axios
  .delete(`lab-scope/store-delete/${id}`)
  .then((response) => {
    // set(response.data);
  })
  .catch((err) => {
    console.log("data");
  });
}

export const updateProduct = async (id, data, setError) => {
  return await axios
  .post(`lab-scope/store-update/${id}`, data)
  .then((response) => {
    // set(response.data);
  })
  .catch((err) => {
    // console.log("data");
  });
}

export const getProductById = async (id, set, setError) => {
  return await axios
  .get(`lab-scope/store-show/${id}`)
  // .then((response) => {
  //   // set(response.data);
  // })
  // .catch((err) => {
  //   // console.log("data");
  // });
}