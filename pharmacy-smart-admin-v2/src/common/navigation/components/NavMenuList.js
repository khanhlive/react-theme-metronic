import React from 'react'

import NavMenuItem from './NavMenuItem';

import AsideChat from "../../chat/components/AsideChat";

export default function SmartMenuList(props) {

  const { items, ...p } = props;

  return (
    <ul {...p}>
      {items.map((item) => {
        return <NavMenuItem item={item} key={item.id} />
      })}
      {/* <AsideChat></AsideChat> */}
    </ul>
  )
}
