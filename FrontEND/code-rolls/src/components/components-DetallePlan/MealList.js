import "bootstrap/dist/css/bootstrap.css";
import { Table, Popover, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const MealList = (props) => {
    const { meals } = props

    const columns = [
        {
          title: "Nombre",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Descripción",
          dataIndex: "details",
          key: "details",
        },
        {
          title: "Action",
          dataIndex: "",
          key: "x",
          render: (data) => {
            return (
              <div>
                <Popover
                  content={
                    <Button
                      type='primary'
                      danger
                      block
                    >
                      Confirmar
                    </Button>
                  }
                  trigger='click'
                  placement='left'
                >
                  <DeleteOutlined style={{ color: "red" }}/>
                </Popover>
              </div>
            );
          },
        },
      ];
    return (
        <>
        <Table
            dataSource={meals}
            columns={columns}
            tableLayout='fixed'
            size='middle'
            rowKey='_id'
          />
        </>
    )
}