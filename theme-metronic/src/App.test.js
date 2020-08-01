import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// $.each($('#header_notification_bar ul.dropdown-menu-list.scroller li'), function (a, b) {
//   lst.push({ 
//     time: $(b).find('.time').text(), 
//     labelColor: $(b).find('span.label').attr('class'),
//     icon: $(b).find('span.label i').attr('class'),
//     message: $(b).find('span.details').text(),

//    })
// })