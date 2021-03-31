import React from 'react'
import Part3A from './Part3A'

function Part3() {

    const matches = window.matchMedia('(min-width:1000px)').matches

    const listTopass = [
        {
            id: 1,
            src: 'https://wallpaperaccess.com/full/307324.jpg',
            label: 'Passing',
            body: 'Enim commodo est et magna. Eiusmod incididunt eu id nulla reprehenderit consectetur aliqua enim eiusmod nulla dolore. Velit anim eiusmod nulla veniam dolore excepteur magna occaecat nisi pariatur nulla. Cupidatat veniam in eiusmod dolore est proident magna cillum ullamco labore esse duis commodo reprehenderit. Minim labore aliqua elit consequat cupidatat laboris. Sint sit magna cupidatat adipisicing aliquip amet incididunt. Consequat sint enim amet ex duis aliqua eu labore.'
        },
        {
            id: 2,
            src: 'https://store-images.s-microsoft.com/image/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.176d9e9a-fb7a-473e-90f6-26c2993854f4?mode=scale&q=90&h=1080&w=1920',
            label: 'Hero Land',
            body: 'Enim commodo est et magna. Eiusmod incididunt eu id nulla reprehenderit consectetur aliqua enim eiusmod nulla dolore. Velit anim eiusmod nulla veniam dolore excepteur magna occaecat nisi pariatur nulla. Cupidatat veniam in eiusmod dolore est proident magna cillum ullamco labore esse duis commodo reprehenderit. Minim labore aliqua elit consequat cupidatat laboris. Sint sit magna cupidatat adipisicing aliquip amet incididunt. Consequat sint enim amet ex duis aliqua eu labore.'
        },
        {
            id: 3,
            src: 'https://wallpaperaccess.com/full/307324.jpg',
            label: 'Passing',
            body: 'Enim commodo est et magna. Eiusmod incididunt eu id nulla reprehenderit consectetur aliqua enim eiusmod nulla dolore. Velit anim eiusmod nulla veniam dolore excepteur magna occaecat nisi pariatur nulla. Cupidatat veniam in eiusmod dolore est proident magna cillum ullamco labore esse duis commodo reprehenderit. Minim labore aliqua elit consequat cupidatat laboris. Sint sit magna cupidatat adipisicing aliquip amet incididunt. Consequat sint enim amet ex duis aliqua eu labore.'
        },
        {
            id: 4,
            src: 'https://store-images.s-microsoft.com/image/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.176d9e9a-fb7a-473e-90f6-26c2993854f4?mode=scale&q=90&h=1080&w=1920',
            label: 'Hero Land',
            body: 'Enim commodo est et magna. Eiusmod incididunt eu id nulla reprehenderit consectetur aliqua enim eiusmod nulla dolore. Velit anim eiusmod nulla veniam dolore excepteur magna occaecat nisi pariatur nulla. Cupidatat veniam in eiusmod dolore est proident magna cillum ullamco labore esse duis commodo reprehenderit. Minim labore aliqua elit consequat cupidatat laboris. Sint sit magna cupidatat adipisicing aliquip amet incididunt. Consequat sint enim amet ex duis aliqua eu labore.'
        }
    ]

    const toShow = listTopass.map( xx => <Part3A key={xx.id} values={xx}/>)   

    return (
        <div className='mt-5'>
            {matches &&  toShow}
        </div>
    )
}

export default Part3
