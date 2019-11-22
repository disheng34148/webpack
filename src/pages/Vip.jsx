import React, { Component } from "react";
import { Table } from "antd";

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
                render: (text, record) => <a href="javascript:;" onClick={() => this.handleDelete(record.id)}>删除</a>
            }
        ];
        this.state = {
            dataSource: []
        }
    }

    componentWillMount() {
        this.getList()
    }

    getList = async () => {
        try {
            const data = await $http('/vip');
            this.setState({
                dataSource: data.list
            })
        } catch (err) {}
    }

    handleDelete = id => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.id !== id) });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <>
                <Table
                    rowKey="id"
                    rowSelection={rowSelection}
                    columns={this.columns}
                    dataSource={dataSource}
                />
            </>
        );
    }
}

export default Vip;
