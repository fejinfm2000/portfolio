import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-rich-text',
  imports: [CommonModule, FormsModule, QuillModule, QuillEditorComponent],
  templateUrl: './rich-text.component.html',
  styleUrl: './rich-text.component.scss'
})
export class RichTextComponent {
  userText: string = '<p></p>';
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  copied: boolean = false;

  constructor(private clipboard: Clipboard) { }

  copyToClipboard() {
    this.clipboard.copy(this.userText);
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 2000); // Reset copied state after 2 seconds
  }
}
