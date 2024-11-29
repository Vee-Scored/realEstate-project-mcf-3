const MapComponent = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.915791836273!2d96.13149637437417!3d16.838084783958458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edbb8a89416d%3A0x64420f52367032b9!2sMMS%20IT!5e1!3m2!1sen!2sth!4v1732718624767!5m2!1sen!2sth"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full md:h-[624px] h-[400px]  "
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapComponent;
