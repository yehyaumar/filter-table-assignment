import React, { Component } from 'react';
import axios from 'axios';
import '../style/filterTable.css';

export default class FilterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalData: [],
      status: [],
      filteredData: [],
      error: ''
    }

    this.filterByStatus = this.filterByStatus.bind(this);
    this.filterByDate = this.filterByDate.bind(this);
  }

  componentDidMount(){
    axios.get("https://my-json-server.typicode.com/orzel-bielik/test/posts")
      .then(response => {
        console.log(response.data)
        const { data } = response
        if (response.status === 200 && data){
          const allStatus = data.map(el => el.status);
          let uniqueStatus = []
          allStatus.forEach(status => {
            if (!uniqueStatus.includes(status))
              uniqueStatus.push(status)
          });
          console.log(uniqueStatus)

          const dataWithCorrectedDate = data.map(el => ({...el, date: el.date.split(" ")[0] }))

          this.setState({ originalData: dataWithCorrectedDate, filteredData: dataWithCorrectedDate, status: uniqueStatus})
        }
      })
  }

  filterByStatus(e){
    console.log(e.target.value);
    let data = this.state.originalData.filter(el => el.status === e.target.value);

    if(e.target.value === "noValue")
      data = this.state.originalData;
    this.setState({filteredData: data})
  }

  filterByDate(e){
    if(e.keyCode === 13){
      const date = new Date(e.target.value);
      if(!isNaN(date)){
        console.log(date.getMonth(), date.getDate(), date.getFullYear())
        const dd = new Date(this.state.originalData[0].date);
        console.log(dd.getMonth(), dd.getDate(), dd.getFullYear())

        let data = this.state.originalData.filter(el => {
          const d = new Date(el.date);
          return date.getMonth() === d.getMonth() &&
            date.getDate() === d.getDate() &&
            date.getFullYear() === d.getFullYear()

        });
        this.setState({filteredData: data, error: ''})
      }else{
        this.setState({filteredData: this.state.originalData, error: "Valid Date Format (mm/dd/yyyy)"})
      }

    }
  }

  render() {
    return (
      <div className="filter-table-container">
        <div className="title-buttons-top">
          <span className="table-title-span">List of Blogs</span>

          <div className="filter-div">
            <span className="table-filter-span">filter by</span>

            <div className="filter-select-status">
              <select name="filterByStatus" id="cars" onChange={this.filterByStatus}>
                <option value="noValue">select</option>
                {
                  this.state.status.map((status, i) => 
                    (<option key={i} value={status}>{status[0].toUpperCase() + status.slice(1)}</option>)
                  )
                }
              </select>
            </div>
            
            <input name="filterByDate" placeholder="date (mm/dd/yyyy)" type="text" onKeyDown={this.filterByDate}/>
          </div>
        </div>

        <p className="error">{this.state.error}</p>

        <div className="table-container">
          <table>
            <tr className="table-header">
              <th>Date</th>
              <th className="middle-col-th">Post Title</th>
              <th>Status</th>
            </tr>
            {
              this.state.filteredData.length > 0?
                this.state.filteredData.map(blog =>{
                  return (
                    <tr key={blog.id}>
                      <td>{new Date(blog.date).toLocaleDateString('en-EN')}</td>
                      <td className="middle-col-td">{blog.title}</td>
                      <td>{blog.status[0].toUpperCase() + blog.status.slice(1)}</td>
                    </tr>
                  )
                }):
                <p className="error">No Data</p>
            }
          </table>
        </div>
      </div>
    )
  }
}