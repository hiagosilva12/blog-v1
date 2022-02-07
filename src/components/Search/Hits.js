import React from "react"

import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    description={hit.description}
    category={hit.category}
  />
)

export default Hit
