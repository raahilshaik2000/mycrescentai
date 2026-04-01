import type { ComponentType } from "react"

export function withFourLineEllipsis(Component): ComponentType {
    return (props) => {
        const newStyle = {
            ...props.style,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 4,
            textOverflow: "ellipsis",
        }
        return <Component {...props} style={newStyle} />
    }
}
