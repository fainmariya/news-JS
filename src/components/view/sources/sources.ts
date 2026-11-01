import './sources.css';
import type { SourcePreview } from '../../../types';

class Sources {
    draw(data: SourcePreview[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (!sourceItemTemp) {
            return;
        }
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector('.source__item-name');

            if (sourceName) {
                sourceName.textContent = item.name;
            }
            const itemData = sourceClone.querySelector('.source__item');
            if (itemData) {
                itemData.setAttribute('data-source-id', item.id);
            }
            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');

        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
