import type { ComponentType } from "react"

export function withTwoLineEllipsis(Component): ComponentType {
    return (props) => {
        const newStyle = {
            ...props.style,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
        }
        return <Component {...props} style={newStyle} />
    }
}
