import styled from "styled-components"
import { BiChevronRight as RightArrow } from "react-icons/bi"


const Products = ({ children }) => {
    return <ProductsWrapper>{children}</ProductsWrapper>
}

Products.Title = ({ name, iconSize=24, children, ...otherProps }) => {
    return (
        <>
            {children 
            ? (<>{children}</>)
            : (<TitleWrapper {...otherProps}>
                    <h2 className="collection-name">{name}</h2>
                    <RightArrow size={iconSize}/>
                </TitleWrapper>)
            }
        </>
    )
}

Products.Card = ({ product }) => {
    const { title, author, price, image } = product

    return (
        <CardWrapper>
            <img src={image || "https://p4.wallpaperbetter.com/wallpaper/33/261/282/5bd28eeaec175-wallpaper-preview.jpg"} alt="mock" />
            <div>
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>R${price}</p>
            </div>
        </CardWrapper>
    )
}

Products.Showcase = ({ children }) => {
    return (
        <ShowcaseWrapper>
            {children}
        </ShowcaseWrapper>
    )
}


Products.Searched = ({ children }) => {
    return (
        <SearchedWrapper>
            {children}
        </SearchedWrapper>
    )
}


/* STYLES */
const ProductsWrapper = styled.section`
    margin: 1.5rem 0 1rem;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .collection-name{
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
    }
`

const TitleWrapper = styled.header`
    width: 100%;
    margin-bottom: 0.5rem;
    cursor: pointer;
`

const CardWrapper = styled.li`
    list-style: none;
    cursor: pointer;

    img{
        object-fit: cover;
    }

    h3{
        margin: 0.2em 0;
        font-size: 14px;
        font-weight: 600;
        color: #979797;
    }

    p{
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5em;
    }
`

const SearchedWrapper = styled.ul`
    li{
        display: flex;
        border: 1px solid #DDD;

        &:not(:last-of-type){
            margin-bottom: 1.5rem;
        }

        img{
            width: 125px;
            height: 125px;
            object-fit: cover;
        }

        div{
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 1rem;

            h2{
                font-weight: 600;
                font-size: 18px;
                margin-bottom: 0.2em;
            }

            h3{
                flex: 1;
            }
        }
    }
`

const ShowcaseWrapper = styled.ul`
    display: flex;
    padding: 0.5rem 0;
    overflow-x: scroll;
    overflow-y: hidden;

    li{
        margin-right: 1.5rem;
        color: #171717;

        img{
            width: 175px;
            height: 175px;
            margin-bottom: 0.5rem;
        }
    }
`

export default Products