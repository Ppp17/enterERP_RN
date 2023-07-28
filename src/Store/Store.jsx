import {View, Text, TextInput, ScrollView} from 'react-native';
import {useState} from 'react';

// 表头组件
const Header = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{width: 100, fontWeight: 'bold'}}>Name</Text>
      <Text style={{width: 100, fontWeight: 'bold'}}>Age</Text>
    </View>
  );
};

// 行组件
const Row = ({data, index, onChange}) => {
  return (
    <View key={index} style={{flexDirection: 'row'}}>
      <TextInput
        style={{width: 100}}
        value={data.name}
        onChangeText={val => onChange(index, 'name', val)}
      />
      <TextInput
        style={{width: 100}}
        value={data.age}
        onChangeText={val => onChange(index, 'age', val)}
      />
    </View>
  );
};

// 主组件
const Store = () => {
  const [tableData, setTableData] = useState([
    {name: 'John', age: 20},
    {name: 'Mary', age: 25},
  ]);

  const editCell = (rowIndex, field, value) => {
    console.log(rowIndex, field, value);
    let data = [...tableData];
    data[rowIndex][field] = value;
    setTableData(data);
  };

  return (
    <ScrollView>
      <Header />
      {tableData.map((row, index) => (
        <Row key={index} data={row} index={index} onChange={editCell} />
      ))}
    </ScrollView>
  );
};

export default Store;
