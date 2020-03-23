import React, { Component } from 'react';
import UserAdding from '../components/Admin/UserAdding'
import CreateAdmin from '../components/Admin/CreateAdmin'
import ChangePassword from '../components/Admin/ChangePassword'
import CreateCode from '../components/Admin/CreateCode'
import DeleteUser from '../components/Admin/DeleteUser'
import DemoteUser from '../components/Admin/DemoteUser'


class Admin extends Component {

  render() {
    return (
      <div>
        <CreateAdmin />
        <ChangePassword />
        <CreateCode />
        <DeleteUser />
        <DemoteUser />
      </div>
    );
  }
}


export default Admin;
