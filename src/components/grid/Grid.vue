<template>
  <n-data-table
    size="small"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>
<script setup>
import { NButton, NTag, useMessage } from "naive-ui";
import { h, ref } from "vue";

function createColumns({ sendMail }) {
  return [
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Age",
      key: "age",
    },
    {
      title: "Address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: "6px",
              },
              type: "info",
              bordered: false,
            },
            {
              default: () => tagKey,
            }
          );
        });
        return tags;
      },
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            size: "small",
            onClick: () => sendMail(row),
          },
          { default: () => "Send Email" }
        );
      },
    },
  ];
}

function createData() {
  return [
    {
      key: 0,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: 1,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["wow"],
    },
    {
      key: 2,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
}

const message = useMessage();
const data = ref(createData());
const columns = ref(
  createColumns({
    sendMail(rowData) {
      message.info(`send mail to ${rowData.name}`);
    },
  })
);
const pagination = ref({
  pageSize: 10,
});
</script>