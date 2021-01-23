import { PlusCircleOutlined } from '@ant-design/icons';

export const filterColumns = [
  {
    value: 'name',
    detail: 'División'
  },
  {
    value: 'parent',
    detail: 'División superior'
  },
  {
    value: 'colaboratorsQty',
    detail: 'Colaboradores'
  },
  {
    value: 'level',
    detail: 'Nivel'
  },
  {
    value: 'subdivisions',
    detail: 'Subdivisiones'
  },
  {
    value: 'ambassador',
    detail: 'Embajadores'
  },
];

export const columns = [
  {
    title: 'División',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
    filters: [
      {
        text: 'Strategy',
        value: 'Strategy',
      },
      {
        text: 'Dirección general',
        value: 'Dirección general',
      },
      {
        text: 'Producto',
        value: 'Producto',
      },
      {
        text: 'Operaciones',
        value: 'Operaciones',
      },
      {
        text: 'CEO',
        value: 'CEO',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'División superior',
    dataIndex: 'parent',
    sorter: (a, b) => a.parent.length - b.parent.length,
    sortDirections: ['descend', 'ascend'],
    filters: [
      {
        text: 'Strategy',
        value: 'Strategy',
      },
      {
        text: 'Dirección general',
        value: 'Dirección general',
      },
      {
        text: 'Producto',
        value: 'Producto',
      },
      {
        text: 'Operaciones',
        value: 'Operaciones',
      },
      {
        text: 'CEO',
        value: 'CEO',
      },
    ],
    onFilter: (value, record) => record.parent.indexOf(value) === 0,
  },
  {
    title: 'Colaboradores',
    dataIndex: 'colaboratorsQty',
    sorter: (a, b) => a.colaboratorsQty - b.colaboratorsQty,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Nivel',
    dataIndex: 'level',
    sorter: (a, b) => a.level - b.level,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Subdivisiones',
    dataIndex: 'subdivisions',
    sorter: (a, b) => a.subdivisions - b.subdivisions,
    sortDirections: ['descend', 'ascend'],
    render: text => (
      <>
        <a
          href="#"
          style={{ marginRight: '12px' }}
        >{text}</a>
        <PlusCircleOutlined />
      </>
    ),
  },
  {
    title: 'Embajadores',
    dataIndex: 'ambassador',
  },
];