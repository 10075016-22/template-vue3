import { h } from "vue";
import { NIcon } from "naive-ui";
export function UtilNaive() {

    // function for rendering the component
    const renderIcon = (icon) => {
        return () => {
            return h(NIcon, null, {
                default: () => h(icon),
            });
        };
    };

    return {
        renderIcon
    }
}