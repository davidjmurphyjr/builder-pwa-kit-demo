import React from 'react'
import loadable from '@loadable/component'
import {useLocation} from 'react-router-dom'
import Seo from '@salesforce/retail-react-app/app/components/seo'
import {Box, Skeleton} from '@salesforce/retail-react-app/app/components/shared/ui'

import {Content, isPreviewing} from '@builder.io/sdk-react'
import {customComponents, builderConfig} from '~/builder'
import {useFetchOneEntry} from '~/builder/hooks'

const PageNotFound = loadable(() => import('@salesforce/retail-react-app/app/pages/page-not-found'))

export const MarketingPage = () => {
    const location = useLocation()

    const urlPath = location.pathname

    const {data, apiKey, isLoading, isError} = useFetchOneEntry({
        queryKey: ['Builder-Fetch-marketing', urlPath],
        options: {
            model: builderConfig.pageModel,
            userAttributes: {urlPath},
            enrich: true
        }
    })
    console.log('>>>> MarketingPage ')
    console.log(JSON.stringify(data))
    console.log('>>>> MarketingPage ')

    if (isLoading) {
        return (
            <Box css={{minHeight: '100vh'}}>
                <Skeleton height="75vh" width="100%" />
            </Box>
        )
    }

    if (!isPreviewing(location.pathname) && isError) {
        return <PageNotFound />
    }

    return (
        <Box css={{minHeight: '100vh'}}>
            {data && (
                <Seo
                    title={data.title}
                    description={data.description}
                    noIndex={data.noIndex}
                    keywords={data.keywords?.join(', ')}
                />
            )}
            <Content
                model={builderConfig.pageModel}
                content={data}
                apiKey={apiKey}
                enrich={true}
                customComponents={customComponents}
            />
        </Box>
    )
}

export default MarketingPage
