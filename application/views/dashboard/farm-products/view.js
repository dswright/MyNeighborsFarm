import React from 'react';
import Table from 'react-bootstrap/table';

export default ({ products }) => (
  <div>
    <h1>Farm Products</h1>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th />
          <th>Product Name</th>
          <th>Inventory</th>
          <th>Availability</th>
          <th>Price</th>
          <th>Delivery Options</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr>
            <td />
            <td>{product.name}</td>
            <td>0</td>
            <td>Nov 1 - Nov 10</td>
            <td>$5.99</td>
            <td>Pickup or Delivery</td>
            <td>Edit</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
