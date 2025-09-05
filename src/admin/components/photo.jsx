const Photo = ({ record, property }) => {
  // сначала пробуем photoUrl (виртуальное поле), иначе — ключ photo
  const urlFromPhotoUrl = record?.params?.photoUrl;
  const key = record?.params?.photo;
  const src =
    urlFromPhotoUrl ||
    (key
      ? `${process.env.ADMIN_API_BASE_URL || 'http://localhost:3002'}/public/${key}`
      : null);

  if (!src) return <span>-</span>;

  return (
    // небольшая миниатюра
    <img
      src={src}
      alt="preview"
      style={{
        maxWidth: 120,
        maxHeight: 80,
        objectFit: 'cover',
        borderRadius: 6,
      }}
    />
  );
};

export default Photo;
