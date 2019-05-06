import React, { Component } from 'react'
import SearchContainer from './containers/SearchContainer'
import SearchResults from './components/SearchResults'
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import { connect } from 'react-redux';

const {
  Header, Footer, Sider, Content,
} = Layout;

const mapStateToProps = state => {
  return state
}

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider theme="light">
            <SearchContainer />
          </Sider>
          <Content>
          <SearchResults
            selectedCities={this.props.selectedCities}
            selectedCategories={this.props.selectedCategories}
            selectedSections={this.props.selectedSections}
            results={[]}
            loading={false}
            loadSuccess={true} /> 
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, null)(App);
