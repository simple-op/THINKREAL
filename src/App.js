import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Adı', field: 'name' , birthYear: 1987, birthCity: 63},
            { title: 'Soyadı', field: 'surname' , birthYear: 1987, birthCity: 63},
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
            { title: 'Adı', field: 'name' , birthYear: 1987, birthCity: 63},
            { title: 'Soyadı', field: 'surname' , birthYear: 1987, birthCity: 63},
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Records"
        />
      </div>
    )
  }
}
 
export default App;