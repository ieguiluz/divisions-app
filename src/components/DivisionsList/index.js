import React, { useEffect, useState } from 'react';
import { Table, Radio, Input, Select } from 'antd';

import './index.less';
import { urls } from '../../environment/urls';
import { filterColumns, columns } from './data';

const { Option } = Select;

const DivisionsList = () => {
  const [divisionsData, setDivisionsData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [divisionsOriginal, setDivisionsOriginal] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [colaboratorsTotal, setColaboratorsTotal] = useState([]);

  useEffect(() => {
    fetchDivisions();
  }, []);

  const fetchDivisions = () => {
    fetch(`${urls.api}/divisions`)
      .then(response => response.json())
      .then(({ divisions }) => {
        const data = divisions.map((item, i) => {
          setColaboratorsTotal(colaboratorsTotal => [...colaboratorsTotal, item.colaborators_qty]);

          return {
            key: i,
            name: item.name,
            parent: item.parent !== null ? item.parent.name : '-',
            colaboratorsQty: item.colaborators_qty,
            level: item.level,
            subdivisions: item.subdivisions_count,
            ambassador: item.ambassador !== null ? item.ambassador : '-',
          }
        });

        setDivisionsData(data);
        setDivisionsOriginal(data);
      })
      .catch(error => {
      });
  }

  const search = value => {
    if (value !== "" && filterType !== "") {
      const filteredDivisions = divisionsOriginal.filter((e) => {
        if (filterType !== 'level' && filterType !== 'colaboratorsQty' && filterType !== 'subdivisions') {
          return e[filterType].toLowerCase().includes(value.toLowerCase());
        }

        return e[filterType] === +value;
      });

      setDivisionsData(filteredDivisions);
    } else {
      setDivisionsData(divisionsOriginal);
    }
  };

  const handleChangeFilterType = (value) => {
    setFilterType(value);
  }

  const rowSelection = { selectedRowKeys };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Radio.Group value="list">
          <Radio.Button value="list">Listado</Radio.Button>
          <Radio.Button value="tree">Árbol</Radio.Button>
        </Radio.Group>

        <div>
          <Select
            placeholder="Columnas"
            style={{ width: 120 }}
            onChange={handleChangeFilterType}
          >
            {filterColumns.map((column, index) => (
              <Option key={index} value={column.value}>{column.detail}</Option>
            ))}
          </Select>
          <Input.Search
            style={{ margin: "0 0 10px 0", width: "213px" }}
            placeholder="Buscar"
            enterButton
            onSearch={search}
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={divisionsData}
        size="small"
        rowSelection={rowSelection}
        pagination={{
          defaultPageSize: '10',
          showSizeChanger: true,
          pageSizeOptions: ['2', '5', '10'],
          showTotal: (total, range) => `Total colaboradores: ${colaboratorsTotal.reduce((a, b) => a + b, 0)}`,
          showTitle: true,
        }}
      />
    </>
  );
};

export default DivisionsList;