// components/CreateProjectModal.jsx
import React from "react";
import { Modal, Form, Input, Select, DatePicker, InputNumber } from "antd";

const { Option } = Select;

const COLUMN_OPTIONS = [
  { value: "column-1", label: "Backlog" },
  { value: "column-2", label: "In Progress" },
  { value: "column-3", label: "Review" },
  { value: "column-4", label: "Completed" },
];

const PRIORITY_OPTIONS = [
  { value: "P-1", label: "P-1" },
  { value: "P-2", label: "P-2" },
  { value: "P-3", label: "P-3" },
];

const USERS = Array.from({ length: 10 }, (_, i) => `user-${i + 1}`);

const AddProjectModal = ({ visible, onCancel, onOpenChange, onCreate }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      const {
        status,
        users,
        totalTasks,
        completedTasks,
        dueDate,
        startDate,
        ...rest
      } = values;
      console.log("rest111", rest);
      const assignees = USERS.filter((user) => users.includes(user)).map(
        (user) => ({ id: user, name: user })
      );
      const tasks = { total: totalTasks, completed: completedTasks };
      const project = {
        ...rest,
        assignees,
        tasks,
        columnId: status,
        dueDate: dueDate.format("DD/MM/YYYY"),
        startDate: startDate.format("DD/MM/YYYY"),
      };
      onCreate({
        project,
        id: Math.random().toString(),
      });
      onOpenChange();
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Create Project"
      open={visible}
      onCancel={onCancel}
      onOk={handleOk}
      okText="Create"
      cancelText="Cancel"
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true, message: "Please enter the project name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please select the status" }]}
        >
          <Select placeholder="Select Status">
            {COLUMN_OPTIONS.map(({ label, value }) => (
              <Option key={value} value={value}>
                {label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: "Please select the start date" }]}
        >
          <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
        </Form.Item>

        <Form.Item
          label="Due Date"
          name="dueDate"
          rules={[{ required: true, message: "Please select the due date" }]}
        >
          <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
        </Form.Item>

        <Form.Item
          label="Priority"
          name="priority"
          rules={[{ required: true, message: "Please select the priority" }]}
        >
          <Select placeholder="Select Priority">
            {PRIORITY_OPTIONS.map(({ label, value }) => (
              <Option key={value} value={value}>
                {label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="users"
          label="Assign Users"
          rules={[{ required: true }]}
        >
          <Select mode="multiple" placeholder="Select users">
            {USERS.map((user) => (
              <Option key={user} value={user}>
                {user}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="totalTasks"
          label="Total Tasks"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="completedTasks"
          label="Completed Tasks"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProjectModal;
