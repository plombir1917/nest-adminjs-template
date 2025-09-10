(function (React$1, adminjs, designSystem) {
  'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  var React__default = /*#__PURE__*/_interopDefault(React$1);

  const api = new adminjs.ApiClient();
  function Dashboard() {
    const [loading, setLoading] = React$1.useState(true);
    const [error, setError] = React$1.useState('');
    const [data, setData] = React$1.useState({
      usersCount: 0,
      activeUsers7d: 0,
      adminJSVersion: ''
    });
    React$1.useEffect(() => {
      let mounted = true;
      (async () => {
        try {
          const res = await api.getDashboard();
          if (mounted) {
            const payload = res?.data || {};
            setData({
              usersCount: Number(payload.usersCount) || 0,
              activeUsers7d: Number(payload.activeUsers7d) || 0,
              adminJSVersion: payload.adminJSVersion || ''
            });
            setLoading(false);
          }
        } catch (e) {
          if (mounted) {
            setError('Не удалось загрузить данные дашборда');
            setLoading(false);
          }
        }
      })();
      return () => {
        mounted = false;
      };
    }, []);
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      px: "lg",
      py: "lg",
      style: {
        fontFamily: `'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
      }
    }, /*#__PURE__*/React.createElement(Header, null), loading ? /*#__PURE__*/React.createElement(LoaderBlock, null) : error ? /*#__PURE__*/React.createElement(ErrorPlaceholder, {
      text: error
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CardsRow, null, /*#__PURE__*/React.createElement(KpiCard, {
      title: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
      value: formatNumber(data.usersCount),
      hint: "\u0412\u0441\u0435\u0433\u043E \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      title: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
      value: formatNumber(data.activeUsers7d),
      hint: "\u0417\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      title: "\u0412\u0435\u0440\u0441\u0438\u044F AdminJS",
      value: data.adminJSVersion || '—',
      hint: "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F"
    })), /*#__PURE__*/React.createElement(designSystem.Box, {
      mt: "xl",
      display: "grid",
      gridTemplateColumns: "1fr",
      style: {
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C"
    }, /*#__PURE__*/React.createElement(designSystem.Box, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      p: "lg"
    }, /*#__PURE__*/React.createElement("img", {
      src: "/public/logo.png",
      alt: "AdminJS",
      style: {
        maxWidth: '200px',
        marginBottom: '16px',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement(designSystem.Text, {
      color: "grey60",
      style: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 1.5
      }
    }, "\u042D\u0442\u043E \u0432\u0430\u0448\u0430 \u043F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0438 \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u043C\u0438 \u043C\u0435\u0442\u0440\u0438\u043A\u0430\u043C\u0438."))))));
  }
  function Header() {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React.createElement(designSystem.H2, {
      marginBottom: "xs",
      style: {
        fontWeight: 700,
        fontSize: 28,
        letterSpacing: '-0.5px'
      }
    }, "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      style: {
        fontSize: 15,
        lineHeight: 1.4
      }
    }, "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B"), /*#__PURE__*/React.createElement("hr", {
      style: {
        marginTop: 14,
        border: 0,
        borderTop: '1px solid #eee'
      }
    }));
  }
  function CardsRow({
    children
  }) {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      style: {
        gap: 24
      }
    }, children);
  }
  function KpiCard({
    title,
    value,
    hint
  }) {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      variant: "container",
      border: true,
      rounded: true,
      p: "xl",
      style: {
        background: '#fff',
        boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        cursor: 'default',
        animation: 'fadeIn 0.6s ease'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.12)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.08)';
      }
    }, /*#__PURE__*/React.createElement(designSystem.Label, {
      style: {
        fontSize: 14,
        color: '#555'
      }
    }, title), /*#__PURE__*/React.createElement(designSystem.Text, {
      as: "div",
      mt: "md",
      style: {
        fontSize: 34,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#111',
        transition: 'opacity 0.5s ease'
      }
    }, value), hint ? /*#__PURE__*/React.createElement(designSystem.Text, {
      variant: "sm",
      mt: "xs",
      color: "grey60",
      style: {
        background: '#f8f9fa',
        borderRadius: 6,
        padding: '2px 6px',
        display: 'inline-block',
        fontSize: 13
      }
    }, hint) : null);
  }
  function Panel({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      variant: "container",
      border: true,
      rounded: true,
      p: "xl",
      style: {
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease'
      }
    }, /*#__PURE__*/React.createElement(designSystem.H2, {
      marginBottom: "md",
      style: {
        fontSize: 18,
        fontWeight: 600
      }
    }, title), children);
  }
  function LoaderBlock() {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      style: {
        minHeight: '240px'
      }
    }, /*#__PURE__*/React.createElement(designSystem.Loader, null));
  }
  function ErrorPlaceholder({
    text
  }) {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      p: "xl",
      style: {
        border: '1px solid #f5c2c7',
        background: '#f8d7da',
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement(designSystem.Text, {
      style: {
        color: '#842029',
        fontWeight: 600
      }
    }, text));
  }
  function formatNumber(n) {
    try {
      return new Intl.NumberFormat('ru-RU').format(Number(n) || 0);
    } catch {
      return String(n);
    }
  }

  const Photo = ({
    record,
    property
  }) => {
    // сначала пробуем photoUrl (виртуальное поле), иначе — ключ photo
    const urlFromPhotoUrl = record?.params?.photoUrl;
    const key = record?.params?.photo;
    const src = urlFromPhotoUrl || (key ? `${AdminJS.env.ADMIN_API_BASE_URL || 'http://localhost:3002'}/public/${key}` : null);
    if (!src) return /*#__PURE__*/React.createElement("span", null, "-");
    return (
      /*#__PURE__*/
      // небольшая миниатюра
      React.createElement("img", {
        src: src,
        alt: "preview",
        style: {
          maxWidth: 120,
          maxHeight: 80,
          objectFit: 'cover',
          borderRadius: 6
        }
      })
    );
  };

  const Edit = ({
    property,
    record,
    onChange
  }) => {
    const {
      translateProperty
    } = adminjs.useTranslation();
    const {
      params
    } = record;
    const {
      custom
    } = property;
    const path = adminjs.flat.get(params, custom.filePathProperty);
    const key = adminjs.flat.get(params, custom.keyProperty);
    const file = adminjs.flat.get(params, custom.fileProperty);
    const [originalKey, setOriginalKey] = React$1.useState(key);
    const [filesToUpload, setFilesToUpload] = React$1.useState([]);
    React$1.useEffect(() => {
      // it means means that someone hit save and new file has been uploaded
      // in this case fliesToUpload should be cleared.
      // This happens when user turns off redirect after new/edit
      if (typeof key === 'string' && key !== originalKey || typeof key !== 'string' && !originalKey || typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length) {
        setOriginalKey(key);
        setFilesToUpload([]);
      }
    }, [key, originalKey]);
    const onUpload = files => {
      setFilesToUpload(files);
      onChange(custom.fileProperty, files);
    };
    const handleRemove = () => {
      onChange(custom.fileProperty, null);
    };
    const handleMultiRemove = singleKey => {
      const index = (adminjs.flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
      const filesToDelete = adminjs.flat.get(record.params, custom.filesToDeleteProperty) || [];
      if (path && path.length > 0) {
        const newPath = path.map((currentPath, i) => i !== index ? currentPath : null);
        let newParams = adminjs.flat.set(record.params, custom.filesToDeleteProperty, [...filesToDelete, index]);
        newParams = adminjs.flat.set(newParams, custom.filePathProperty, newPath);
        onChange({
          ...record,
          params: newParams
        });
      } else {
        // eslint-disable-next-line no-console
        console.log('You cannot remove file when there are no uploaded files yet');
      }
    };
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)), /*#__PURE__*/React__default.default.createElement(designSystem.DropZone, {
      translations: {
        placeholder: 'Перетащите файл сюда или нажмите, чтобы выбрать',
        acceptedSize: 'Максимальный размер: {{maxSize}}',
        acceptedType: 'Поддерживаемые типы: {{mimeTypes}}',
        unsupportedSize: 'Файл {{fileName}} слишком большой',
        unsupportedType: 'Файл {{fileName}} имеет неподдерживаемый тип: {{fileType}}'
      },
      onChange: onUpload,
      multiple: custom.multiple,
      validate: {
        mimeTypes: custom.mimeTypes,
        maxSize: custom.maxSize
      },
      files: filesToUpload
    }), !custom.multiple && key && path && !filesToUpload.length && file !== null && /*#__PURE__*/React__default.default.createElement(designSystem.DropZoneItem, {
      filename: key,
      src: path,
      onRemove: handleRemove
    }), custom.multiple && key && key.length && path ? /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, key.map((singleKey, index) => {
      // when we remove items we set only path index to nulls.
      // key is still there. This is because
      // we have to maintain all the indexes. So here we simply filter out elements which
      // were removed and display only what was left
      const currentPath = path[index];
      return currentPath ? /*#__PURE__*/React__default.default.createElement(designSystem.DropZoneItem, {
        key: singleKey,
        filename: singleKey,
        src: path[index],
        onRemove: () => handleMultiRemove(singleKey)
      }) : '';
    })) : '');
  };

  const AudioMimeTypes = [
      'audio/aac',
      'audio/midi',
      'audio/x-midi',
      'audio/mpeg',
      'audio/ogg',
      'application/ogg',
      'audio/opus',
      'audio/wav',
      'audio/webm',
      'audio/3gpp2',
  ];
  const ImageMimeTypes = [
      'image/bmp',
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/vnd.microsoft.icon',
      'image/tiff',
      'image/webp',
  ];

  // eslint-disable-next-line import/no-extraneous-dependencies
  const SingleFile = (props) => {
      const { name, path, mimeType, width } = props;
      if (path && path.length) {
          if (mimeType && ImageMimeTypes.includes(mimeType)) {
              return (React__default.default.createElement("img", { src: path, style: { maxHeight: width, maxWidth: width }, alt: name }));
          }
          if (mimeType && AudioMimeTypes.includes(mimeType)) {
              return (React__default.default.createElement("audio", { controls: true, src: path },
                  "Your browser does not support the",
                  React__default.default.createElement("code", null, "audio"),
                  React__default.default.createElement("track", { kind: "captions" })));
          }
      }
      return (React__default.default.createElement(designSystem.Box, null,
          React__default.default.createElement(designSystem.Button, { as: "a", href: path, ml: "default", size: "sm", rounded: true, target: "_blank" },
              React__default.default.createElement(designSystem.Icon, { icon: "DocumentDownload", color: "white", mr: "default" }),
              name)));
  };
  const File = ({ width, record, property }) => {
      const { custom } = property;
      let path = adminjs.flat.get(record?.params, custom.filePathProperty);
      if (!path) {
          return null;
      }
      const name = adminjs.flat.get(record?.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
      const mimeType = custom.mimeTypeProperty
          && adminjs.flat.get(record?.params, custom.mimeTypeProperty);
      if (!property.custom.multiple) {
          if (custom.opts && custom.opts.baseUrl) {
              path = `${custom.opts.baseUrl}/${name}`;
          }
          return (React__default.default.createElement(SingleFile, { path: path, name: name, width: width, mimeType: mimeType }));
      }
      if (custom.opts && custom.opts.baseUrl) {
          const baseUrl = custom.opts.baseUrl || '';
          path = path.map((singlePath, index) => `${baseUrl}/${name[index]}`);
      }
      return (React__default.default.createElement(React__default.default.Fragment, null, path.map((singlePath, index) => (React__default.default.createElement(SingleFile, { key: singlePath, path: singlePath, name: name[index], width: width, mimeType: mimeType[index] })))));
  };

  const List = (props) => (React__default.default.createElement(File, { width: 100, ...props }));

  const Show = (props) => {
      const { property } = props;
      const { translateProperty } = adminjs.useTranslation();
      return (React__default.default.createElement(designSystem.FormGroup, null,
          React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default.default.createElement(File, { width: "100%", ...props })));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Dashboard = Dashboard;
  AdminJS.UserComponents.Photo = Photo;
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;

})(React, AdminJS, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGhvdG8uanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWVkaXQuanN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZmlsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQuanMiLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBpQ2xpZW50IH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgeyBCb3gsIEgyLCBUZXh0LCBMYWJlbCwgTG9hZGVyIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcbiAgICB1c2Vyc0NvdW50OiAwLFxuICAgIGFjdGl2ZVVzZXJzN2Q6IDAsXG4gICAgYWRtaW5KU1ZlcnNpb246ICcnLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBtb3VudGVkID0gdHJ1ZTtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldERhc2hib2FyZCgpO1xuICAgICAgICBpZiAobW91bnRlZCkge1xuICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSByZXM/LmRhdGEgfHwge307XG4gICAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgICB1c2Vyc0NvdW50OiBOdW1iZXIocGF5bG9hZC51c2Vyc0NvdW50KSB8fCAwLFxuICAgICAgICAgICAgYWN0aXZlVXNlcnM3ZDogTnVtYmVyKHBheWxvYWQuYWN0aXZlVXNlcnM3ZCkgfHwgMCxcbiAgICAgICAgICAgIGFkbWluSlNWZXJzaW9uOiBwYXlsb2FkLmFkbWluSlNWZXJzaW9uIHx8ICcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChtb3VudGVkKSB7XG4gICAgICAgICAgc2V0RXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC00LDQvdC90YvQtSDQtNCw0YjQsdC+0YDQtNCwJyk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcHg9XCJsZ1wiXG4gICAgICBweT1cImxnXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IGAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZgLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGVyQmxvY2sgLz5cbiAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgPEVycm9yUGxhY2Vob2xkZXIgdGV4dD17ZXJyb3J9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkc1Jvdz5cbiAgICAgICAgICAgIDxLcGlDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1hdE51bWJlcihkYXRhLnVzZXJzQ291bnQpfVxuICAgICAgICAgICAgICBoaW50PVwi0JLRgdC10LPQviDQsiDRgdC40YHRgtC10LzQtVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEtwaUNhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCLQkNC60YLQuNCy0L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtYXROdW1iZXIoZGF0YS5hY3RpdmVVc2VyczdkKX1cbiAgICAgICAgICAgICAgaGludD1cItCX0LAg0L/QvtGB0LvQtdC00L3QuNC1IDcg0LTQvdC10LlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxLcGlDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwi0JLQtdGA0YHQuNGPIEFkbWluSlNcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5hZG1pbkpTVmVyc2lvbiB8fCAn4oCUJ31cbiAgICAgICAgICAgICAgaGludD1cItCi0LXQutGD0YnQsNGPINCy0LXRgNGB0LjRj1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2FyZHNSb3c+XG5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBtdD1cInhsXCJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJncmlkXCJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCIxZnJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZ2FwOiAyNCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYW5lbCB0aXRsZT1cItCU0L7QsdGA0L4g0L/QvtC20LDQu9C+0LLQsNGC0YxcIj5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgcD1cImxnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9wdWJsaWMvbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQWRtaW5KU1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmV5NjBcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINCt0YLQviDQstCw0YjQsCDQv9Cw0L3QtdC70Ywg0YPQv9GA0LDQstC70LXQvdC40Y8uINCX0LTQtdGB0Ywg0LLRiyDQvdCw0LnQtNC10YLQtSDQvtGB0L3QvtCy0L3Ri9C1INGB0LLQtdC00LXQvdC40Y9cbiAgICAgICAgICAgICAgICAgINC+INGB0LjRgdGC0LXQvNC1INC4INGB0LzQvtC20LXRgtC1INGB0LvQtdC00LjRgtGMINC30LAg0LrQu9GO0YfQtdCy0YvQvNC4INC80LXRgtGA0LjQutCw0LzQuC5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBtYj1cInhsXCI+XG4gICAgICA8SDJcbiAgICAgICAgbWFyZ2luQm90dG9tPVwieHNcIlxuICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAsIGZvbnRTaXplOiAyOCwgbGV0dGVyU3BhY2luZzogJy0wLjVweCcgfX1cbiAgICAgID5cbiAgICAgICAg0J/QsNC90LXQu9GMINGD0L/RgNCw0LLQu9C10L3QuNGPXG4gICAgICA8L0gyPlxuICAgICAgPFRleHRcbiAgICAgICAgdmFyaWFudD1cInNtXCJcbiAgICAgICAgY29sb3I9XCJncmV5NjBcIlxuICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTUsIGxpbmVIZWlnaHQ6IDEuNCB9fVxuICAgICAgPlxuICAgICAgICDQmtGA0LDRgtC60L7QtSDRgNC10LfRjtC80LUg0LrQu9GO0YfQtdCy0YvRhSDQv9C+0LrQsNC30LDRgtC10LvQtdC5INC4INGB0L7RgdGC0L7Rj9C90LjRjyDRgdC40YHRgtC10LzRi1xuICAgICAgPC9UZXh0PlxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpblRvcDogMTQsIGJvcmRlcjogMCwgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlZWUnIH19IC8+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmRzUm93KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRpc3BsYXk9XCJncmlkXCJcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNjBweCwgMWZyKSlcIlxuICAgICAgc3R5bGU9e3sgZ2FwOiAyNCB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gS3BpQ2FyZCh7IHRpdGxlLCB2YWx1ZSwgaGludCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lclwiXG4gICAgICBib3JkZXJcbiAgICAgIHJvdW5kZWRcbiAgICAgIHA9XCJ4bFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDhweCByZ2JhKDAsMCwwLDAuMDgpJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgYW5pbWF0aW9uOiAnZmFkZUluIDAuNnMgZWFzZScsXG4gICAgICB9fVxuICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTRweCknO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJzAgNnB4IDE0cHggcmdiYSgwLDAsMCwwLjEyKSc7XG4gICAgICB9fVxuICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJzAgM3B4IDhweCByZ2JhKDAsMCwwLDAuMDgpJztcbiAgICAgIH19XG4gICAgPlxuICAgICAgPExhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICcjNTU1JyB9fT57dGl0bGV9PC9MYWJlbD5cbiAgICAgIDxUZXh0XG4gICAgICAgIGFzPVwiZGl2XCJcbiAgICAgICAgbXQ9XCJtZFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZm9udFNpemU6IDM0LFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICAgICAgY29sb3I6ICcjMTExJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjVzIGVhc2UnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1RleHQ+XG4gICAgICB7aGludCA/IChcbiAgICAgICAgPFRleHRcbiAgICAgICAgICB2YXJpYW50PVwic21cIlxuICAgICAgICAgIG10PVwieHNcIlxuICAgICAgICAgIGNvbG9yPVwiZ3JleTYwXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmOGY5ZmEnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgICAgICAgICAgcGFkZGluZzogJzJweCA2cHgnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtoaW50fVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGFuZWwoeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHZhcmlhbnQ9XCJjb250YWluZXJcIlxuICAgICAgYm9yZGVyXG4gICAgICByb3VuZGVkXG4gICAgICBwPVwieGxcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDJweCA2cHggcmdiYSgwLDAsMCwwLjA1KScsXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEgyIG1hcmdpbkJvdHRvbT1cIm1kXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvSDI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExvYWRlckJsb2NrKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMjQwcHgnIH19XG4gICAgPlxuICAgICAgPExvYWRlciAvPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5mdW5jdGlvbiBFcnJvclBsYWNlaG9sZGVyKHsgdGV4dCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcD1cInhsXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZjVjMmM3JyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmOGQ3ZGEnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUZXh0IHN0eWxlPXt7IGNvbG9yOiAnIzg0MjAyOScsIGZvbnRXZWlnaHQ6IDYwMCB9fT57dGV4dH08L1RleHQ+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihuKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUtUlUnKS5mb3JtYXQoTnVtYmVyKG4pIHx8IDApO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gU3RyaW5nKG4pO1xuICB9XG59XG4iLCJjb25zdCBQaG90byA9ICh7IHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xuICAvLyDRgdC90LDRh9Cw0LvQsCDQv9GA0L7QsdGD0LXQvCBwaG90b1VybCAo0LLQuNGA0YLRg9Cw0LvRjNC90L7QtSDQv9C+0LvQtSksINC40L3QsNGH0LUg4oCUINC60LvRjtGHIHBob3RvXG4gIGNvbnN0IHVybEZyb21QaG90b1VybCA9IHJlY29yZD8ucGFyYW1zPy5waG90b1VybDtcbiAgY29uc3Qga2V5ID0gcmVjb3JkPy5wYXJhbXM/LnBob3RvO1xuICBjb25zdCBzcmMgPVxuICAgIHVybEZyb21QaG90b1VybCB8fFxuICAgIChrZXlcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuQURNSU5fQVBJX0JBU0VfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDInfS9wdWJsaWMvJHtrZXl9YFxuICAgICAgOiBudWxsKTtcblxuICBpZiAoIXNyYykgcmV0dXJuIDxzcGFuPi08L3NwYW4+O1xuXG4gIHJldHVybiAoXG4gICAgLy8g0L3QtdCx0L7Qu9GM0YjQsNGPINC80LjQvdC40LDRgtGO0YDQsFxuICAgIDxpbWdcbiAgICAgIHNyYz17c3JjfVxuICAgICAgYWx0PVwicHJldmlld1wiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXhXaWR0aDogMTIwLFxuICAgICAgICBtYXhIZWlnaHQ6IDgwLFxuICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvO1xuIiwiaW1wb3J0IHtcbiAgRHJvcFpvbmUsXG4gIERyb3Bab25lSXRlbSxcbiAgRm9ybUdyb3VwLFxuICBMYWJlbCxcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBmbGF0LCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBFZGl0ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IHBhcmFtcyB9ID0gcmVjb3JkO1xuICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XG4gIGNvbnN0IHBhdGggPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KTtcbiAgY29uc3Qga2V5ID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpO1xuICBjb25zdCBmaWxlID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVByb3BlcnR5KTtcbiAgY29uc3QgW29yaWdpbmFsS2V5LCBzZXRPcmlnaW5hbEtleV0gPSB1c2VTdGF0ZShrZXkpO1xuICBjb25zdCBbZmlsZXNUb1VwbG9hZCwgc2V0RmlsZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaXQgbWVhbnMgbWVhbnMgdGhhdCBzb21lb25lIGhpdCBzYXZlIGFuZCBuZXcgZmlsZSBoYXMgYmVlbiB1cGxvYWRlZFxuICAgIC8vIGluIHRoaXMgY2FzZSBmbGllc1RvVXBsb2FkIHNob3VsZCBiZSBjbGVhcmVkLlxuICAgIC8vIFRoaXMgaGFwcGVucyB3aGVuIHVzZXIgdHVybnMgb2ZmIHJlZGlyZWN0IGFmdGVyIG5ldy9lZGl0XG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSAhPT0gb3JpZ2luYWxLZXkpIHx8XG4gICAgICAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgIW9yaWdpbmFsS2V5KSB8fFxuICAgICAgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoa2V5KSAmJlxuICAgICAgICBrZXkubGVuZ3RoICE9PSBvcmlnaW5hbEtleS5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBzZXRPcmlnaW5hbEtleShrZXkpO1xuICAgICAgc2V0RmlsZXNUb1VwbG9hZChbXSk7XG4gICAgfVxuICB9LCBba2V5LCBvcmlnaW5hbEtleV0pO1xuICBjb25zdCBvblVwbG9hZCA9IChmaWxlcykgPT4ge1xuICAgIHNldEZpbGVzVG9VcGxvYWQoZmlsZXMpO1xuICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIGZpbGVzKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIG51bGwpO1xuICB9O1xuICBjb25zdCBoYW5kbGVNdWx0aVJlbW92ZSA9IChzaW5nbGVLZXkpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IChmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpIHx8IFtdKS5pbmRleE9mKFxuICAgICAgc2luZ2xlS2V5LFxuICAgICk7XG4gICAgY29uc3QgZmlsZXNUb0RlbGV0ZSA9XG4gICAgICBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXTtcbiAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLm1hcCgoY3VycmVudFBhdGgsIGkpID0+XG4gICAgICAgIGkgIT09IGluZGV4ID8gY3VycmVudFBhdGggOiBudWxsLFxuICAgICAgKTtcbiAgICAgIGxldCBuZXdQYXJhbXMgPSBmbGF0LnNldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5LCBbXG4gICAgICAgIC4uLmZpbGVzVG9EZWxldGUsXG4gICAgICAgIGluZGV4LFxuICAgICAgXSk7XG4gICAgICBuZXdQYXJhbXMgPSBmbGF0LnNldChuZXdQYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5LCBuZXdQYXRoKTtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ucmVjb3JkLFxuICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdZb3UgY2Fubm90IHJlbW92ZSBmaWxlIHdoZW4gdGhlcmUgYXJlIG5vIHVwbG9hZGVkIGZpbGVzIHlldCcsXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgRm9ybUdyb3VwLFxuICAgIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIExhYmVsLFxuICAgICAgbnVsbCxcbiAgICAgIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSxcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmUsIHtcbiAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ9Cf0LXRgNC10YLQsNGJ0LjRgtC1INGE0LDQudC7INGB0Y7QtNCwINC40LvQuCDQvdCw0LbQvNC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCcsXG4gICAgICAgIGFjY2VwdGVkU2l6ZTogJ9Cc0LDQutGB0LjQvNCw0LvRjNC90YvQuSDRgNCw0LfQvNC10YA6IHt7bWF4U2l6ZX19JyxcbiAgICAgICAgYWNjZXB0ZWRUeXBlOiAn0J/QvtC00LTQtdGA0LbQuNCy0LDQtdC80YvQtSDRgtC40L/Rizoge3ttaW1lVHlwZXN9fScsXG4gICAgICAgIHVuc3VwcG9ydGVkU2l6ZTogJ9Ck0LDQudC7IHt7ZmlsZU5hbWV9fSDRgdC70LjRiNC60L7QvCDQsdC+0LvRjNGI0L7QuScsXG4gICAgICAgIHVuc3VwcG9ydGVkVHlwZTpcbiAgICAgICAgICAn0KTQsNC50Lsge3tmaWxlTmFtZX19INC40LzQtdC10YIg0L3QtdC/0L7QtNC00LXRgNC20LjQstCw0LXQvNGL0Lkg0YLQuNC/OiB7e2ZpbGVUeXBlfX0nLFxuICAgICAgfSxcbiAgICAgIG9uQ2hhbmdlOiBvblVwbG9hZCxcbiAgICAgIG11bHRpcGxlOiBjdXN0b20ubXVsdGlwbGUsXG4gICAgICB2YWxpZGF0ZToge1xuICAgICAgICBtaW1lVHlwZXM6IGN1c3RvbS5taW1lVHlwZXMsXG4gICAgICAgIG1heFNpemU6IGN1c3RvbS5tYXhTaXplLFxuICAgICAgfSxcbiAgICAgIGZpbGVzOiBmaWxlc1RvVXBsb2FkLFxuICAgIH0pLFxuICAgICFjdXN0b20ubXVsdGlwbGUgJiZcbiAgICAgIGtleSAmJlxuICAgICAgcGF0aCAmJlxuICAgICAgIWZpbGVzVG9VcGxvYWQubGVuZ3RoICYmXG4gICAgICBmaWxlICE9PSBudWxsICYmXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwge1xuICAgICAgICBmaWxlbmFtZToga2V5LFxuICAgICAgICBzcmM6IHBhdGgsXG4gICAgICAgIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmUsXG4gICAgICB9KSxcbiAgICBjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIGtleS5sZW5ndGggJiYgcGF0aFxuICAgICAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFJlYWN0LkZyYWdtZW50LFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAga2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSByZW1vdmUgaXRlbXMgd2Ugc2V0IG9ubHkgcGF0aCBpbmRleCB0byBudWxscy5cbiAgICAgICAgICAgIC8vIGtleSBpcyBzdGlsbCB0aGVyZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxuICAgICAgICAgICAgLy8gd2VyZSByZW1vdmVkIGFuZCBkaXNwbGF5IG9ubHkgd2hhdCB3YXMgbGVmdFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoW2luZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aFxuICAgICAgICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmVJdGVtLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHNpbmdsZUtleSxcbiAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBzaW5nbGVLZXksXG4gICAgICAgICAgICAgICAgICBzcmM6IHBhdGhbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgb25SZW1vdmU6ICgpID0+IGhhbmRsZU11bHRpUmVtb3ZlKHNpbmdsZUtleSksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgOiAnJyxcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiZXhwb3J0IGNvbnN0IEF1ZGlvTWltZVR5cGVzID0gW1xuICAgICdhdWRpby9hYWMnLFxuICAgICdhdWRpby9taWRpJyxcbiAgICAnYXVkaW8veC1taWRpJyxcbiAgICAnYXVkaW8vbXBlZycsXG4gICAgJ2F1ZGlvL29nZycsXG4gICAgJ2FwcGxpY2F0aW9uL29nZycsXG4gICAgJ2F1ZGlvL29wdXMnLFxuICAgICdhdWRpby93YXYnLFxuICAgICdhdWRpby93ZWJtJyxcbiAgICAnYXVkaW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBWaWRlb01pbWVUeXBlcyA9IFtcbiAgICAndmlkZW8veC1tc3ZpZGVvJyxcbiAgICAndmlkZW8vbXBlZycsXG4gICAgJ3ZpZGVvL29nZycsXG4gICAgJ3ZpZGVvL21wMnQnLFxuICAgICd2aWRlby93ZWJtJyxcbiAgICAndmlkZW8vM2dwcCcsXG4gICAgJ3ZpZGVvLzNncHAyJyxcbl07XG5leHBvcnQgY29uc3QgSW1hZ2VNaW1lVHlwZXMgPSBbXG4gICAgJ2ltYWdlL2JtcCcsXG4gICAgJ2ltYWdlL2dpZicsXG4gICAgJ2ltYWdlL2pwZWcnLFxuICAgICdpbWFnZS9wbmcnLFxuICAgICdpbWFnZS9zdmcreG1sJyxcbiAgICAnaW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uJyxcbiAgICAnaW1hZ2UvdGlmZicsXG4gICAgJ2ltYWdlL3dlYnAnLFxuXTtcbmV4cG9ydCBjb25zdCBDb21wcmVzc2VkTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAyJyxcbiAgICAnYXBwbGljYXRpb24vZ3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZScsXG4gICAgJ2FwcGxpY2F0aW9uL3gtdGFyJyxcbiAgICAnYXBwbGljYXRpb24vemlwJyxcbiAgICAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcbl07XG5leHBvcnQgY29uc3QgRG9jdW1lbnRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtZnJlZWFyYycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hbWF6b24uZWJvb2snLFxuICAgICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLnJhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3J0ZicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0Jyxcbl07XG5leHBvcnQgY29uc3QgVGV4dE1pbWVUeXBlcyA9IFtcbiAgICAndGV4dC9jc3MnLFxuICAgICd0ZXh0L2NzdicsXG4gICAgJ3RleHQvaHRtbCcsXG4gICAgJ3RleHQvY2FsZW5kYXInLFxuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnYXBwbGljYXRpb24vbGQranNvbicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvcGxhaW4nLFxuICAgICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnLFxuICAgICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICd0ZXh0L3htbCcsXG5dO1xuZXhwb3J0IGNvbnN0IEJpbmFyeURvY3NNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL2VwdWIremlwJyxcbiAgICAnYXBwbGljYXRpb24vcGRmJyxcbl07XG5leHBvcnQgY29uc3QgRm9udE1pbWVUeXBlcyA9IFtcbiAgICAnZm9udC9vdGYnLFxuICAgICdmb250L3R0ZicsXG4gICAgJ2ZvbnQvd29mZicsXG4gICAgJ2ZvbnQvd29mZjInLFxuXTtcbmV4cG9ydCBjb25zdCBPdGhlck1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAnYXBwbGljYXRpb24veC1jc2gnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtaHR0cGQtcGhwJyxcbiAgICAnYXBwbGljYXRpb24veC1zaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyxcbiAgICAndm5kLnZpc2lvJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1vemlsbGEueHVsK3htbCcsXG5dO1xuZXhwb3J0IGNvbnN0IE1pbWVUeXBlcyA9IFtcbiAgICAuLi5BdWRpb01pbWVUeXBlcyxcbiAgICAuLi5WaWRlb01pbWVUeXBlcyxcbiAgICAuLi5JbWFnZU1pbWVUeXBlcyxcbiAgICAuLi5Db21wcmVzc2VkTWltZVR5cGVzLFxuICAgIC4uLkRvY3VtZW50TWltZVR5cGVzLFxuICAgIC4uLlRleHRNaW1lVHlwZXMsXG4gICAgLi4uQmluYXJ5RG9jc01pbWVUeXBlcyxcbiAgICAuLi5PdGhlck1pbWVUeXBlcyxcbiAgICAuLi5Gb250TWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuXTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXVkaW9NaW1lVHlwZXMsIEltYWdlTWltZVR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvbWltZS10eXBlcy50eXBlLmpzJztcbmNvbnN0IFNpbmdsZUZpbGUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBhdGgsIG1pbWVUeXBlLCB3aWR0aCB9ID0gcHJvcHM7XG4gICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKG1pbWVUeXBlICYmIEltYWdlTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBwYXRoLCBzdHlsZTogeyBtYXhIZWlnaHQ6IHdpZHRoLCBtYXhXaWR0aDogd2lkdGggfSwgYWx0OiBuYW1lIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWltZVR5cGUgJiYgQXVkaW9NaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCB7IGNvbnRyb2xzOiB0cnVlLCBzcmM6IHBhdGggfSxcbiAgICAgICAgICAgICAgICBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZVwiLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiYXVkaW9cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyYWNrXCIsIHsga2luZDogXCJjYXB0aW9uc1wiIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgYXM6IFwiYVwiLCBocmVmOiBwYXRoLCBtbDogXCJkZWZhdWx0XCIsIHNpemU6IFwic21cIiwgcm91bmRlZDogdHJ1ZSwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgaWNvbjogXCJEb2N1bWVudERvd25sb2FkXCIsIGNvbG9yOiBcIndoaXRlXCIsIG1yOiBcImRlZmF1bHRcIiB9KSxcbiAgICAgICAgICAgIG5hbWUpKSk7XG59O1xuY29uc3QgRmlsZSA9ICh7IHdpZHRoLCByZWNvcmQsIHByb3BlcnR5IH0pID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XG4gICAgbGV0IHBhdGggPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpO1xuICAgIGlmICghcGF0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA/IGN1c3RvbS5maWxlTmFtZVByb3BlcnR5IDogY3VzdG9tLmtleVByb3BlcnR5KTtcbiAgICBjb25zdCBtaW1lVHlwZSA9IGN1c3RvbS5taW1lVHlwZVByb3BlcnR5XG4gICAgICAgICYmIGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eSk7XG4gICAgaWYgKCFwcm9wZXJ0eS5jdXN0b20ubXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgICAgIHBhdGggPSBgJHtjdXN0b20ub3B0cy5iYXNlVXJsfS8ke25hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlRmlsZSwgeyBwYXRoOiBwYXRoLCBuYW1lOiBuYW1lLCB3aWR0aDogd2lkdGgsIG1pbWVUeXBlOiBtaW1lVHlwZSB9KSk7XG4gICAgfVxuICAgIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBjdXN0b20ub3B0cy5iYXNlVXJsIHx8ICcnO1xuICAgICAgICBwYXRoID0gcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiBgJHtiYXNlVXJsfS8ke25hbWVbaW5kZXhdfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHBhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlRmlsZSwgeyBrZXk6IHNpbmdsZVBhdGgsIHBhdGg6IHNpbmdsZVBhdGgsIG5hbWU6IG5hbWVbaW5kZXhdLCB3aWR0aDogd2lkdGgsIG1pbWVUeXBlOiBtaW1lVHlwZVtpbmRleF0gfSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlLmpzJztcbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGUsIHsgd2lkdGg6IDEwMCwgLi4ucHJvcHMgfSkpO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsImltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlLmpzJztcbmNvbnN0IFNob3cgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSBwcm9wcztcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtR3JvdXAsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogXCIxMDAlXCIsIC4uLnByb3BzIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2hvdztcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkRhc2hib2FyZCA9IERhc2hib2FyZFxuaW1wb3J0IFBob3RvIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3Bob3RvJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5QaG90byA9IFBob3RvXG5pbXBvcnQgVXBsb2FkRWRpdENvbXBvbmVudCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkRWRpdENvbXBvbmVudCA9IFVwbG9hZEVkaXRDb21wb25lbnRcbmltcG9ydCBVcGxvYWRMaXN0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRMaXN0Q29tcG9uZW50ID0gVXBsb2FkTGlzdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZFNob3dDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZFNob3dDb21wb25lbnQgPSBVcGxvYWRTaG93Q29tcG9uZW50Il0sIm5hbWVzIjpbImFwaSIsIkFwaUNsaWVudCIsIkRhc2hib2FyZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZGF0YSIsInNldERhdGEiLCJ1c2Vyc0NvdW50IiwiYWN0aXZlVXNlcnM3ZCIsImFkbWluSlNWZXJzaW9uIiwidXNlRWZmZWN0IiwibW91bnRlZCIsInJlcyIsImdldERhc2hib2FyZCIsInBheWxvYWQiLCJOdW1iZXIiLCJlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQm94IiwicHgiLCJweSIsInN0eWxlIiwiZm9udEZhbWlseSIsIkhlYWRlciIsIkxvYWRlckJsb2NrIiwiRXJyb3JQbGFjZWhvbGRlciIsInRleHQiLCJGcmFnbWVudCIsIkNhcmRzUm93IiwiS3BpQ2FyZCIsInRpdGxlIiwidmFsdWUiLCJmb3JtYXROdW1iZXIiLCJoaW50IiwibXQiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIlBhbmVsIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInAiLCJzcmMiLCJhbHQiLCJtYXhXaWR0aCIsIm1hcmdpbkJvdHRvbSIsIm9wYWNpdHkiLCJUZXh0IiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJtYiIsIkgyIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJ2YXJpYW50IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiY2hpbGRyZW4iLCJyb3VuZGVkIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJjdXJzb3IiLCJhbmltYXRpb24iLCJvbk1vdXNlRW50ZXIiLCJjdXJyZW50VGFyZ2V0IiwidHJhbnNmb3JtIiwib25Nb3VzZUxlYXZlIiwiTGFiZWwiLCJhcyIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtaW5IZWlnaHQiLCJMb2FkZXIiLCJuIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsIlN0cmluZyIsIlBob3RvIiwicmVjb3JkIiwicHJvcGVydHkiLCJ1cmxGcm9tUGhvdG9VcmwiLCJwYXJhbXMiLCJwaG90b1VybCIsImtleSIsInBob3RvIiwiQWRtaW5KUyIsImVudiIsIkFETUlOX0FQSV9CQVNFX1VSTCIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsIkVkaXQiLCJvbkNoYW5nZSIsInRyYW5zbGF0ZVByb3BlcnR5IiwidXNlVHJhbnNsYXRpb24iLCJjdXN0b20iLCJwYXRoIiwiZmxhdCIsImdldCIsImZpbGVQYXRoUHJvcGVydHkiLCJrZXlQcm9wZXJ0eSIsImZpbGUiLCJmaWxlUHJvcGVydHkiLCJvcmlnaW5hbEtleSIsInNldE9yaWdpbmFsS2V5IiwiZmlsZXNUb1VwbG9hZCIsInNldEZpbGVzVG9VcGxvYWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvblVwbG9hZCIsImZpbGVzIiwiaGFuZGxlUmVtb3ZlIiwiaGFuZGxlTXVsdGlSZW1vdmUiLCJzaW5nbGVLZXkiLCJpbmRleCIsImluZGV4T2YiLCJmaWxlc1RvRGVsZXRlIiwiZmlsZXNUb0RlbGV0ZVByb3BlcnR5IiwibmV3UGF0aCIsIm1hcCIsImN1cnJlbnRQYXRoIiwiaSIsIm5ld1BhcmFtcyIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJGb3JtR3JvdXAiLCJsYWJlbCIsInJlc291cmNlSWQiLCJEcm9wWm9uZSIsInRyYW5zbGF0aW9ucyIsInBsYWNlaG9sZGVyIiwiYWNjZXB0ZWRTaXplIiwiYWNjZXB0ZWRUeXBlIiwidW5zdXBwb3J0ZWRTaXplIiwidW5zdXBwb3J0ZWRUeXBlIiwibXVsdGlwbGUiLCJ2YWxpZGF0ZSIsIm1pbWVUeXBlcyIsIm1heFNpemUiLCJEcm9wWm9uZUl0ZW0iLCJmaWxlbmFtZSIsIm9uUmVtb3ZlIiwiQnV0dG9uIiwiSWNvbiIsIlVzZXJDb21wb25lbnRzIiwiVXBsb2FkRWRpdENvbXBvbmVudCIsIlVwbG9hZExpc3RDb21wb25lbnQiLCJVcGxvYWRTaG93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0VBSUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLGlCQUFTLEVBQUU7RUFFWixT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SSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLE1BQU1BLHNCQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzVOLENBQUM7O0VDekNELE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxNQUFNQSxzQkFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQzs7RUNFN0UsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUs7RUFDeEIsSUFBSSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSztFQUM5QixJQUFJLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHbUYsc0JBQWMsRUFBRTtFQUNsRCxJQUFJLFFBQVFuRixzQkFBSyxDQUFDLGFBQWEsQ0FBQ29ILHNCQUFTLEVBQUUsSUFBSTtFQUMvQyxRQUFRcEgsc0JBQUssQ0FBQyxhQUFhLENBQUN3RCxrQkFBSyxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUNoRyxRQUFReEQsc0JBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDL0QsQ0FBQzs7RUNWRDJFLE9BQU8sQ0FBQzRELGNBQWMsR0FBRyxFQUFFO0VBRTNCNUQsT0FBTyxDQUFDNEQsY0FBYyxDQUFDekosU0FBUyxHQUFHQSxTQUFTO0VBRTVDNkYsT0FBTyxDQUFDNEQsY0FBYyxDQUFDcEUsS0FBSyxHQUFHQSxLQUFLO0VBRXBDUSxPQUFPLENBQUM0RCxjQUFjLENBQUNDLG1CQUFtQixHQUFHQSxJQUFtQjtFQUVoRTdELE9BQU8sQ0FBQzRELGNBQWMsQ0FBQ0UsbUJBQW1CLEdBQUdBLElBQW1CO0VBRWhFOUQsT0FBTyxDQUFDNEQsY0FBYyxDQUFDRyxtQkFBbUIsR0FBR0EsSUFBbUI7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMyw0LDUsNl19
