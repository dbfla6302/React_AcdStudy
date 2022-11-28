import styled from 'styled-components';

// Gallery.js
export const Container = styled.div`
    width: ${props => props.width};
    margin: auto;
`

// GallerySearch.js
export const ImageSearch = styled.form`
    text-align: center;
    padding: 30px 0;
    input{
        width: 300px;
        height: 50px;
        border: 1px solid #999;
        box-sizing: border-box;
        padding: 0 20px;
    }
    button{
        width: 150px;
        height: 50px;
        background: #000;
        color: #fff;
        border: none;
        vertical-align: top;
    }
`

// GalleryList.js
export const ImageList = styled.div`
    .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
    }
    .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
    }

    /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
    }
`

// GalleryItem.js
export const ImageItem = styled.article`
    margin-bottom: 40px;
    box-shadow: 5px 5px 10px #dcdcdc;
    padding: 15px 15px 40px;
    border: 1px solid #dcdcdc;
    img{
        width: 100%;
    }
    h2{
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: uppercase;
    }
    ul{
        li{ margin-bottom: 5px; }
    }
    p{
        margin-top: 15px;
        span{
            display: inline-block; padding: 3px 15px; border-radius: 15px; background: mistyrose; margin-right: 5px;
        }
    }
`