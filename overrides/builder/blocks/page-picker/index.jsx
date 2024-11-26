import React from 'react'
import PropTypes from 'prop-types'


export const PagePicker = ({...props}) => {


    return <div>Page Picker</div>
}

PagePicker.propTypes = {
    page: PropTypes.object
}

export const PagePickerDefinition = {
    component: PagePicker,
    name: 'PagePicker',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/abstract.svg',
    inputs: [{
        name: 'page',
        type: 'reference',
        model: 'page'
    }]
}

export default PagePicker
