import React from 'react';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import { groupedOptions } from './datas';
import Recomand from './recomand';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);
 

class Selects extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    selectedOption: []
  };

}
  handleChange = selectedOption => {
    this.setState({ selectedOption });
   console.log(this.state.selectedOption);
  };
 
  render() {
    const { selectedOption } = this.state;
 
  return(
    
  <div>
  <Select
    isMulti
    name="colors"
    options={groupedOptions}
    formatGroupLabel={formatGroupLabel}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={this.handleChange}
    value={selectedOption}
  />
  <Recomand data={this.state.selectedOption}/>
    </div>
  );
}
}
export default Selects;