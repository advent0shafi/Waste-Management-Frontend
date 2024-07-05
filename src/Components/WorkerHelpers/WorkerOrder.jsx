import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PencilIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, Typography, Button, CardBody, Chip, CardFooter, Avatar, IconButton, Tooltip, Input, Select, Option } from "@material-tailwind/react";

const TABLE_HEAD = ["Order ID", "User", "Total Price", "Created At", "Status", "Actions"];

const WorkerOrder = () => {
  const [orders, setOrders] = useState([]);
  const [editingStatus, setEditingStatus] = useState({});

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/product/orders/')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const handleStatusChange = (orderId, status) => {
    setEditingStatus(prevState => ({ ...prevState, [orderId]: status }));
  };

  const saveStatus = (orderId) => {
    const status = editingStatus[orderId];
    axios.patch(`http://127.0.0.1:8000/product/orders/${orderId}/`, { status })
      .then(() => {
        setOrders(prevOrders => prevOrders.map(order => 
          order.id === orderId ? { ...order, status } : order
        ));
        setEditingStatus(prevState => ({ ...prevState, [orderId]: undefined }));
      })
      .catch(error => console.error('Error updating order status:', error));
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Orders
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              List of all orders
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map(head => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const isLast = index === orders.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={order.id}>
                  <td className={classes}>{order.id}</td>
                  <td className={classes}>{order.user.username}</td>
                  <td className={classes}>${order.total_price}</td>
                  <td className={classes}>{new Date(order.created_at).toLocaleString()}</td>
                  <td className={classes}>
                    {editingStatus[order.id] !== undefined ? (
                      <Select
                        value={editingStatus[order.id]}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      >
                        <Option value="Pending">Pending</Option>
                        <Option value="Processing">Processing</Option>
                        <Option value="Shipped">Shipped</Option>
                        <Option value="Delivered">Delivered</Option>
                        <Option value="Cancelled">Cancelled</Option>
                      </Select>
                    ) : (
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={order.status}
                        color={
                          order.status === "Delivered"
                            ? "green"
                            : order.status === "Pending"
                            ? "amber"
                            : "red"
                        }
                      />
                    )}
                  </td>
                  <td className={classes}>
                    {editingStatus[order.id] !== undefined ? (
                      <Button onClick={() => saveStatus(order.id)}>Save</Button>
                    ) : (
                      <Tooltip content="Edit Status">
                        <IconButton variant="text" onClick={() => handleStatusChange(order.id, order.status)}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkerOrder;