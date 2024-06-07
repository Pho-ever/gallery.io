import {
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';

const ShareButtons = () => {
  const shareUrl = 'https://gallery-io.vercel.app/';
  const title = 'Hi there, you can make uploads, edit and save your favourite image on Gallery.io, check it out'; 

  return (
    <div className="share-button">
      <h3>Share:</h3>
      <div className='share-container'>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <EmailShareButton url={shareUrl} subject={title} body="Check out this link:">
        <EmailIcon size={32} round />
      </EmailShareButton>
      </div>
      
    </div>
  );
};

export default ShareButtons;
