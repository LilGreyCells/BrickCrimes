import React, { Component } from 'react'
import './style.css'
import searchIcon from '../../assets/search.png'
import ReactAutocomplete from 'react-autocomplete'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      // <div className='searchBar'>
      //   <img src={searchIcon} alt='searchIcon' className='searchIcon' />
      //   <div className='searchInputContainer'>
      //     <input
      //       type='text'
      //       placeholder='Search here'
      //       className='searchInput'
      //     />
      //   </div>
      // </div>
      
      <ReactAutocomplete
      wrapperStyle={{width:"100%",position:"absolute",textAlign:"center",height:"7%"}}
      items={[
        { id: 'foo', label: 'foo' },
        { id: 'bar', label: 'bar' },
        { id: 'baz', label: 'baz' },
      ]}
      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
      getItemValue={item => item.label}
      renderItem={(item, highlighted) =>
        <div
          key={item.id}
          style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
        >
          {item.label}
        </div>
      }

      inputProps={{
        placeholder:"Search",
        style:{width: '90%',
        textAlign:"center",
        height:"100%",
        border:'1px solid #0861d1',
        marginTop: '5px',
        borderRadius: '5px',
        outline: 'none'
      }
      }}
      renderInput={function(props) {
        return <input {...props} />
      }}
      value={this.state.value}
      onChange={e => this.setState({ value: e.target.value })}
      onSelect={value => this.setState({ value })}
    />
   
    
    )
  }
}
