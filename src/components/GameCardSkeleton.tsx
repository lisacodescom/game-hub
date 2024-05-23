import { Card, CardBody, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
    return (
        <Card >
                <Skeleton height={'200px'} />
                <CardBody><SkeletonCircle/></CardBody>
        </Card>
    )
}

export default GameCardSkeleton