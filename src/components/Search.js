import React, { Component } from 'react'
import { cityOptions, categoryOptions, sectionOptions } from '../mockdata/mock_data'
import FilterContainer from '../containers/FilterContainer';
import axios from 'axios'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            selectedCities: [],
            selectedCategories: [],
            selectedSections: [],
            results: [],
            loading: true,
        })
    }

    componentDidMount() {
        this.getAllJobs()
    }

    getAllJobs = () => {
        axios.get('/api/list').then( response => {
            if (response.data.success) {
                this.setState({
                    results: response.data.jobs,
                    loading: false
                })
            }
        })
    }

    search = () => {
        this.setState({
            loading: true
        })
        if (
            this.props.selectedCities.length > 0 ||
            this.props.selectedCategories.length > 0 ||
            this.props.selectedSections.length > 0
        ) {
            axios.post('/api/search', {
                cities: this.props.selectedCities,
                categories: this.props.selectedCategories,
                sections: this.props.selectedSections,
            }).then( response => {
                if (response.data.success) {
                    if (response.data.jobs.length > 0) {
                        this.setState({
                            results: response.data.jobs,
                            loading: false,
                        })
                    } else {
                        this.setState({
                            results: [],
                            loading: false,
                        })
                    }
                }
            }).catch( err => {
                    console.log("err", err)
                    this.setState({
                        results: [],
                        loading: false,
                    })
            })
        } else {
            this.getAllJobs()
        }
        this.setState({
            selectedCities: this.props.selectedCitiesValues,
            selectedCategories: this.props.selectedCategoriesValues,
            selectedSections: this.props.selectedSectionsValues,
        })
    }
    
    render() {
        return (

                <div>
                    <div>
                        <FilterContainer name="Şehir" data={cityOptions} category="selectedCities" />
                        <FilterContainer name="Kategori" data={categoryOptions} category="selectedCategories" />
                        <FilterContainer name="Bölüm" data={sectionOptions} category="selectedSections" />
                        <button onClick={this.search}>Ara</button>
                    </div>
                </div>
        )
    }
}

export default Search