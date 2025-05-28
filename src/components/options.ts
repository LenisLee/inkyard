import blogBeforeIcon from '../assets/book.svg'
import blogAfterIcon from '../assets/smiling.svg'
import golangBeforeIcon from '../assets/golang.svg'

export interface IconOption {
    type: string,
    alt: string,
    beforeIcon: string,
    afterIcon: string
}

const iconOption: IconOption[] = [
    {
        type: 'blog',
        alt: 'blog',
        beforeIcon: blogBeforeIcon.src,
        afterIcon: blogAfterIcon.src
    },
    {
        type: 'golangBlog',
        alt: 'blog',
        beforeIcon: golangBeforeIcon.src,
        afterIcon: ''
    },
]
export const getIconByType = (type: string) => {
    return iconOption.find((item) => item.type === type)
}

