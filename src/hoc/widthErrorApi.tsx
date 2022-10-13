import { useState, ComponentType } from "react";
import { GlobalSvgSelector } from "../assets/icons/global/GlobalSvgSelector";
import { Loader } from "../components/ui/Loader/Loader";
export interface HocProps {
	isLoading: boolean;
	error: boolean;
}
export const widthErrorApi = <T extends HocProps>(
	View: ComponentType<T>
) => {
	return (props: HocProps) => {
		const [errorApi, seterrorApi] = useState(false)
		if (props.error) return <Loader id="error" />
		if (props.isLoading) return <Loader id="loader" />
		return (
			<View {...(props as T)} seterrorApi={errorApi} />
		);
	};
};
