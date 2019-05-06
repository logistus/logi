import React, { Component } from 'react'

class SearchResults extends Component {
    render() {
        return (
            <div>
                <div>
                    Seçilen Filtreler
                    {
                        this.props.selectedCities.length > 0 && <span>
                            <strong>Şehir:</strong> { this.props.selectedCities.map(filter => <span key={filter} className="selectedFilter">{filter}</span>) }
                        </span>
                    }
                    {
                        this.props.selectedCategories.length > 0 && <span>
                            <strong>Kategori:</strong> { this.props.selectedCategories.map(filter => <span key={filter}className="selectedFilter">{filter}</span>) }
                        </span>
                    }
                    {
                        this.props.selectedSections.length > 0 && <span>
                            <strong>Bölüm:</strong> { this.props.selectedSections.map(filter => <span key={filter}className="selectedFilter">{filter}</span>) }
                        </span>
                    }
                </div>
                <div className={this.props.loading ? "show" : "hide"}>Aranıyor...</div>
                <div className={this.props.loading ? "hide" : "show"}>
                    {/* <div>{this.props.results.length} sonuç bulundu</div> */}
                    {
                        this.props.results.map(job =>
                             <div key={job._id}>{job.name} - {job.city}</div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default SearchResults