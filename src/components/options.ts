const blogBeforeIcon = '/src/assets/book.svg'
const blogAfterIcon = '/src/assets/smiling.svg'
const golangBeforeIcon = '/src/assets/golang.svg'

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
        beforeIcon: blogBeforeIcon,
        afterIcon: blogAfterIcon
    },
    {
        type: 'golangBlog',
        alt: 'blog',
        beforeIcon: golangBeforeIcon,
        afterIcon: ''
    },
]
export const getIconByType = (type: string) => {
    return iconOption.find((item) => item.type === type)
}

