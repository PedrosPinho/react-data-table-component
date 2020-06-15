import React from 'react';
import { storiesOf } from '@storybook/react';
import tableDataItems from '../constants/sampleDesserts';
import DataTable from '../../../src/index';

const col = [
  {
    name: 'Name',
    width: 100,
    selector: 'name',
    sortable: true,
    style: {
      backgroundColor: 'rgba(187, 204, 221, 1)',
    },
  },
  {
    name: 'Type',
    selector: 'type',
    width: 100,
    sortable: true,
  },
  {
    name: 'Calories (g)',
    selector: 'calories',
    width: 100,
    sortable: true,
    left: true,
    style: {
      backgroundColor: 'rgba(187, 204, 221, 1)',
    },
  },
  {
    name: 'Fat (g)',
    selector: 'fat',
    width: 100,
    sortable: true,
    left: true,
  },
  {
    name: 'Carbs (g)',
    selector: 'carbs',
    sortable: true,
    width: 100,
    left: true,
    style: {
      backgroundColor: 'rgba(187, 204, 221, 1)',
    },
  },
  {
    name: 'Protein (g)',
    selector: 'protein',
    width: 100,
    sortable: true,
    left: true,
  },
  {
    name: 'Sodium (mg)',
    selector: 'sodium',
    sortable: true,
    width: 100,
    left: true,
    style: {
      backgroundColor: 'rgba(187, 204, 221, 1)',
    },
  },
  {
    name: 'Calcium (%)',
    selector: 'calcium',
    sortable: true,
    width: 100,
    left: true,
  },
  {
    name: 'Iron (%)',
    selector: 'iron',
    sortable: true,
    left: true,
    width: 100,
    style: {
      backgroundColor: 'rgba(187, 204, 221, 1)',
    },
  },
];

const WidthChange = () => {
  const [columns, setColumns] = React.useState(col);
  return (
    <DataTable
      title="Desserts - Width Changing"
      columns={columns}
      data={tableDataItems}
      resizeRowProps={e =>
        setColumns(c => {
          const co = [...c];
          co[e.index].width += e.size;
          return co;
        })}
    />
  );
};

storiesOf('Width Changing', module).add('Width Changing', WidthChange);
