import React, { Component } from "react";
import { Table } from "antd";


const data = [
    {
        key: "0",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
    },
    {
        key: "1",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
    },
    {
        key: "2",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
    },
    {
        key: "3",
        name: "Disabled User",
        age: 99,
        address: "Sidney No. 1 Lake Park"
    }
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    getCheckboxProps: record => {
        // return ({
        //     disabled: record.name === "Disabled User", // Column configuration not to be checked
        //     name: record.name
        // })
    }
};

class Vip extends Component {
    constructor(props) {
        super(props)
        this.columns = [
            {
                title: "姓名",
                dataIndex: "name"
            },
            {
                title: "年龄",
                dataIndex: "age"
            },
            {
                title: "住址",
                dataIndex: "address"
            },
            {
                title: "操作",
                dataIndex: "delete",
                render: (text, record) => <a href="javascript:;" onClick={() => this.handleDelete(record.key)}>删除</a>
            }
        ];
        this.state = {
            dataSource: data
        }
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <>
                <Table
                    rowSelection={rowSelection}
                    columns={this.columns}
                    dataSource={dataSource}
                />
            </>
        );
    }
}

export default Vip;
