import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoriasWrapper = styled.section`
    display: flex;
	flex-direction: column;
	max-width: 1300px;
	margin: 0 15px;
	@media (max-width: 768px) {
		padding-top: 30px;
		text-align: center;
	};
`

export const CategoriasContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	gap: 20px;
	user-select: none;
`
export const CardCategoria = styled(motion.div)`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	width: 150px;
	padding: 2rem 0.5rem;
	background-color: ${({ selected }) =>
		selected ? "var(--orange-bg)" : "var(--gray-bg)"};
	border-radius: 15px;
	cursor: pointer;
	h2 {
		font-size: 1rem;
	}
	:first-child {
		img {
			padding-top: 7px;
			padding-bottom: 7px;
		}
	}
`

export const BorderDecoration = styled.div`
    height: 5px;
	width: 30%;
	background: var(--btn-gradient);
	border-radius: 15px;
`