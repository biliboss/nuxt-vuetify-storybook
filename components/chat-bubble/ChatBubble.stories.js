import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

// import ChatBubble from './ChatBubble';

export default {
  title: 'Chat Bubble'
  // component: ChatBubble,
}

export const Text = () => ({
  template: '<chat-bubble @click="action">Hello Button</chat-bubble>',
  methods: { action: action('clicked') }
})
