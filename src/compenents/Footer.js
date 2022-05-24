import { getYear } from '../utilites/getDate'
 

const Footer = ({ copyright, author }) => (
	<footer>
        <p>&copy;{copyright} {author}</p>
    </footer>
);

Footer.defaultProps = {
    author: 'FWD30',
    copyright: getYear()
}

export default Footer;