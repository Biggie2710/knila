import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Table } from 'antd';

const Home = () => {
  const navigate = useNavigate();
  let data = [
    {
      key: '1',
      name: 'Alex Brown',
      phone: 33412,
      address: 'New York No. 1 Lake Park',
      city: 'London',
      email: 'alexgreen@gmail.com',
      state: 'UA',
      country: 'UA',
      code: '001',
    },
    {
      key: '2',
      name: 'Jim Green',
      phone: 45452,
      address: 'London No. 1 Lake Park',
      email: 'jimgreen@gmail.com',
      city: 'London',
      state: 'US',
      country: 'US',
      code: '001',
    },
    {
      key: '3',
      name: 'Joe Black',
      phone: 25254,
      address: 'Sydney No. 1 Lake Park',
      email: 'joeblack@gmail.com',
      city: 'Sydney',
      state: 'US',
      country: 'US',
      code: '002',
    },
    {
      key: '4',
      name: 'Jim Red',
      phone: 31102,
      address: 'London No. 2 Lake Park',
      email: 'jimred@gmail.com',
      city: 'London',
      state: 'US',
      country: 'US',
      code: '001',
    },
  ];
  const [addData, setAddData] = useState([]);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      defaultSortOrder: 'descend',
      // sorter: (a, b) => a.phone - b.phone,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
    },
    {
      title: 'Country',
      dataIndex: 'country',
    },
    {
      title: 'Postal Code',
      dataIndex: 'code',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <button type="button" class="btn btn-outline-success" onClick={() => navigate('/contact', { state: record })}>Edit</button>
        </>
      ),
    },
  ];

  const addFunc = async (e) => {
    if (e.length > 0 && e[0] != null) {
      setAddData([...data, ...e]);
    } else {
      setAddData(data);
    }
  }

  useEffect(() => {
    let localData = localStorage.getItem("addContact");
    if (localData == 'null') {
      setAddData(data);
    }
    if (localData != 'null') {
      let retArray = JSON.parse(localData);
      let newArray = [];
      newArray.push(retArray);
      addFunc(newArray);
    }
  }, [window.location.pathname === "/home"]);

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div>
      <div class="container-fluid">
        <div class="row d-flex">
          <div class="col align-middle">
            <div class="px-2 py-2">
              <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=900&t=st=1667037491~exp=1667038091~hmac=7c71ea8afc8f3cc8065c5ccc05d105e3c8a7b76f0133016cb210a7882dc19611" class="img-fluid" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="px-5 py-5 mt-5">
              <div class="px-2 py-2 align-middle">
                <h4>Get all your needs Here</h4>
                <p> An online learning and teaching marketplace with over 204000 courses and 54 million students. Learn programming, marketing, data science and more.</p>
              </div>
              <div class="px-2 py-2">
                <button type="button" class="btn btn-outline-success" onClick={() => navigate('/contact')}>Add Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-container bg-light">
        <div class="container-fluid px-3 py-3">
          <div class="row center mx-4 my-4 text-dark">
            <h2>Meet Our Expert</h2>
            <p>Highly professional team</p>
          </div>
          <div class="row mb-5">
            <div class="col">
              <div class="card" >
                <img src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1474.jpg?w=740&t=st=1667038053~exp=1667038653~hmac=7f51a4d7c9f7dc9e0e3a6d53d45f381fc455e5424bcc36a0bedca65db24487e7" class="card-img-top" style={{ height: "300px" }} alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Martina doena</h5>
                  <p class="card-text">Highly proficient in Web3 and AI and professional in Designing Websites with tools of Web3.0.</p>
                  {/* <a href="#" class="btn org-btn">Learn More.</a> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" >
                <img src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1074.jpg" class="card-img-top" style={{ height: "300px" }} alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Zaid S.</h5>
                  <p class="card-text">A professional web designer with a wealth of knowledge about the web Development and Software Development. </p>
                  {/* <a href="#" class="btn org-btn">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" >
                <img src="https://img.freepik.com/free-vector/teaching-concept-illustration_114360-1708.jpg?w=740&t=st=1667038099~exp=1667038699~hmac=d144ede4a891a4bfcb57b109cc26614850ed35f5260bbf32541845325c476dbb" class="card-img-top" style={{ height: "300px" }} alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Jhon Doe</h5>
                  <p class="card-text">Expert in all aspects of coding and knowledgeable about a wide range of coding languages</p>
                  {/* <a href="#" class="btn org-btn">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="card-container">
        <div class="row center mx-4 my-4 text-black">
          <h2>Workout</h2>
          <p>Contact listing in table</p>
        </div>
        <Table columns={columns} dataSource={addData} onChange={onChange} />;
      </div>
    </div>
  )
}

export default Home;