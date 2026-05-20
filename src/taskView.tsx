import { StrictMode } from 'react';
import { ItemView, WorkspaceLeaf } from 'obsidian';
import { Root, createRoot } from 'react-dom/client';
import { ReactView } from './ReactView';

export const VIEW_TYPE_EXAMPLE = 'example-view';

export class ExampleView extends ItemView {
    root: Root | null = null;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return 'Task view';
  }

  async onOpen() {
    const container = this.contentEl;
    container.empty();
    container.createEl('h4', { text: 'Task view' });

    this.root = createRoot(this.contentEl);
    this.root.render(
                    <StrictMode>
                        <ReactView />
                    </StrictMode>
    );
  }

  async onClose() {
    this.root?.unmount();
  }
}