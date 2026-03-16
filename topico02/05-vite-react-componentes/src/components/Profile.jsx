import { Avatar } from "./Avatar";
import Title from "./Title";

/* eslint-disable react/prop-types */
export function Profile(props) {//{user}
  return <>
    <Title content={props.user.name} link={props.user.wiki} />
    <Avatar user={props.user} />
  </>
}
