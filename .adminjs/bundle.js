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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGhvdG8uanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWVkaXQuanN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZmlsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQuanMiLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgQm94LCBIMiwgVGV4dCwgTGFiZWwsIExvYWRlciB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJzQ291bnQ6IDAsXHJcbiAgICBhY3RpdmVVc2VyczdkOiAwLFxyXG4gICAgYWRtaW5KU1ZlcnNpb246ICcnLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG1vdW50ZWQgPSB0cnVlO1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0RGFzaGJvYXJkKCk7XHJcbiAgICAgICAgaWYgKG1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSByZXM/LmRhdGEgfHwge307XHJcbiAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgdXNlcnNDb3VudDogTnVtYmVyKHBheWxvYWQudXNlcnNDb3VudCkgfHwgMCxcclxuICAgICAgICAgICAgYWN0aXZlVXNlcnM3ZDogTnVtYmVyKHBheWxvYWQuYWN0aXZlVXNlcnM3ZCkgfHwgMCxcclxuICAgICAgICAgICAgYWRtaW5KU1ZlcnNpb246IHBheWxvYWQuYWRtaW5KU1ZlcnNpb24gfHwgJycsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChtb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQsNC90L3Ri9C1INC00LDRiNCx0L7RgNC00LAnKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIG1vdW50ZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBweD1cImxnXCJcclxuICAgICAgcHk9XCJsZ1wiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udEZhbWlseTogYCdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZmAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMb2FkZXJCbG9jayAvPlxyXG4gICAgICApIDogZXJyb3IgPyAoXHJcbiAgICAgICAgPEVycm9yUGxhY2Vob2xkZXIgdGV4dD17ZXJyb3J9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxDYXJkc1Jvdz5cclxuICAgICAgICAgICAgPEtwaUNhcmRcclxuICAgICAgICAgICAgICB0aXRsZT1cItCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1hdE51bWJlcihkYXRhLnVzZXJzQ291bnQpfVxyXG4gICAgICAgICAgICAgIGhpbnQ9XCLQktGB0LXQs9C+INCyINGB0LjRgdGC0LXQvNC1XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEtwaUNhcmRcclxuICAgICAgICAgICAgICB0aXRsZT1cItCQ0LrRgtC40LLQvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C4XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWF0TnVtYmVyKGRhdGEuYWN0aXZlVXNlcnM3ZCl9XHJcbiAgICAgICAgICAgICAgaGludD1cItCX0LAg0L/QvtGB0LvQtdC00L3QuNC1IDcg0LTQvdC10LlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8S3BpQ2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwi0JLQtdGA0YHQuNGPIEFkbWluSlNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmFkbWluSlNWZXJzaW9uIHx8ICfigJQnfVxyXG4gICAgICAgICAgICAgIGhpbnQ9XCLQotC10LrRg9GJ0LDRjyDQstC10YDRgdC40Y9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DYXJkc1Jvdz5cclxuXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIG10PVwieGxcIlxyXG4gICAgICAgICAgICBkaXNwbGF5PVwiZ3JpZFwiXHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCIxZnJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBnYXA6IDI0IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQYW5lbCB0aXRsZT1cItCU0L7QsdGA0L4g0L/QvtC20LDQu9C+0LLQsNGC0YxcIj5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgcD1cImxnXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9wdWJsaWMvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJBZG1pbkpTXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmV5NjBcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg0K3RgtC+INCy0LDRiNCwINC/0LDQvdC10LvRjCDRg9C/0YDQsNCy0LvQtdC90LjRjy4g0JfQtNC10YHRjCDQstGLINC90LDQudC00LXRgtC1INC+0YHQvdC+0LLQvdGL0LUg0YHQstC10LTQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgICDQviDRgdC40YHRgtC10LzQtSDQuCDRgdC80L7QttC10YLQtSDRgdC70LXQtNC40YLRjCDQt9CwINC60LvRjtGH0LXQstGL0LzQuCDQvNC10YLRgNC40LrQsNC80LguXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBtYj1cInhsXCI+XHJcbiAgICAgIDxIMlxyXG4gICAgICAgIG1hcmdpbkJvdHRvbT1cInhzXCJcclxuICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAsIGZvbnRTaXplOiAyOCwgbGV0dGVyU3BhY2luZzogJy0wLjVweCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgINCf0LDQvdC10LvRjCDRg9C/0YDQsNCy0LvQtdC90LjRj1xyXG4gICAgICA8L0gyPlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIHZhcmlhbnQ9XCJzbVwiXHJcbiAgICAgICAgY29sb3I9XCJncmV5NjBcIlxyXG4gICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxNSwgbGluZUhlaWdodDogMS40IH19XHJcbiAgICAgID5cclxuICAgICAgICDQmtGA0LDRgtC60L7QtSDRgNC10LfRjtC80LUg0LrQu9GO0YfQtdCy0YvRhSDQv9C+0LrQsNC30LDRgtC10LvQtdC5INC4INGB0L7RgdGC0L7Rj9C90LjRjyDRgdC40YHRgtC10LzRi1xyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW5Ub3A6IDE0LCBib3JkZXI6IDAsIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZWVlJyB9fSAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZHNSb3coeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgZGlzcGxheT1cImdyaWRcIlxyXG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDFmcikpXCJcclxuICAgICAgc3R5bGU9e3sgZ2FwOiAyNCB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBLcGlDYXJkKHsgdGl0bGUsIHZhbHVlLCBoaW50IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB2YXJpYW50PVwiY29udGFpbmVyXCJcclxuICAgICAgYm9yZGVyXHJcbiAgICAgIHJvdW5kZWRcclxuICAgICAgcD1cInhsXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggOHB4IHJnYmEoMCwwLDAsMC4wOCknLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICBhbmltYXRpb246ICdmYWRlSW4gMC42cyBlYXNlJyxcclxuICAgICAgfX1cclxuICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtNHB4KSc7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICcwIDZweCAxNHB4IHJnYmEoMCwwLDAsMC4xMiknO1xyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDApJztcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJzAgM3B4IDhweCByZ2JhKDAsMCwwLDAuMDgpJztcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPExhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICcjNTU1JyB9fT57dGl0bGV9PC9MYWJlbD5cclxuICAgICAgPFRleHRcclxuICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgbXQ9XCJtZFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiAzNCxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgICAgIGNvbG9yOiAnIzExMScsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjVzIGVhc2UnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dmFsdWV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAge2hpbnQgPyAoXHJcbiAgICAgICAgPFRleHRcclxuICAgICAgICAgIHZhcmlhbnQ9XCJzbVwiXHJcbiAgICAgICAgICBtdD1cInhzXCJcclxuICAgICAgICAgIGNvbG9yPVwiZ3JleTYwXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZjhmOWZhJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMnB4IDZweCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMTMsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtoaW50fVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYW5lbCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lclwiXHJcbiAgICAgIGJvcmRlclxyXG4gICAgICByb3VuZGVkXHJcbiAgICAgIHA9XCJ4bFwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMDUpJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxIMiBtYXJnaW5Cb3R0b209XCJtZFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgZm9udFdlaWdodDogNjAwIH19PlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9IMj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTG9hZGVyQmxvY2soKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6ICcyNDBweCcgfX1cclxuICAgID5cclxuICAgICAgPExvYWRlciAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRXJyb3JQbGFjZWhvbGRlcih7IHRleHQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHA9XCJ4bFwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmNWMyYzcnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZjhkN2RhJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxUZXh0IHN0eWxlPXt7IGNvbG9yOiAnIzg0MjAyOScsIGZvbnRXZWlnaHQ6IDYwMCB9fT57dGV4dH08L1RleHQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydS1SVScpLmZvcm1hdChOdW1iZXIobikgfHwgMCk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gU3RyaW5nKG4pO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBQaG90byA9ICh7IHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xyXG4gIC8vINGB0L3QsNGH0LDQu9CwINC/0YDQvtCx0YPQtdC8IHBob3RvVXJsICjQstC40YDRgtGD0LDQu9GM0L3QvtC1INC/0L7Qu9C1KSwg0LjQvdCw0YfQtSDigJQg0LrQu9GO0YcgcGhvdG9cclxuICBjb25zdCB1cmxGcm9tUGhvdG9VcmwgPSByZWNvcmQ/LnBhcmFtcz8ucGhvdG9Vcmw7XHJcbiAgY29uc3Qga2V5ID0gcmVjb3JkPy5wYXJhbXM/LnBob3RvO1xyXG4gIGNvbnN0IHNyYyA9XHJcbiAgICB1cmxGcm9tUGhvdG9VcmwgfHxcclxuICAgIChrZXlcclxuICAgICAgPyBgJHtwcm9jZXNzLmVudi5BRE1JTl9BUElfQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMid9L3B1YmxpYy8ke2tleX1gXHJcbiAgICAgIDogbnVsbCk7XHJcblxyXG4gIGlmICghc3JjKSByZXR1cm4gPHNwYW4+LTwvc3Bhbj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyDQvdC10LHQvtC70YzRiNCw0Y8g0LzQuNC90LjQsNGC0Y7RgNCwXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17c3JjfVxyXG4gICAgICBhbHQ9XCJwcmV2aWV3XCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtYXhXaWR0aDogMTIwLFxyXG4gICAgICAgIG1heEhlaWdodDogODAsXHJcbiAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogNixcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvO1xyXG4iLCJpbXBvcnQge1xyXG4gIERyb3Bab25lLFxyXG4gIERyb3Bab25lSXRlbSxcclxuICBGb3JtR3JvdXAsXHJcbiAgTGFiZWwsXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcbmltcG9ydCB7IGZsYXQsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBFZGl0ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgY29uc3QgeyBwYXJhbXMgfSA9IHJlY29yZDtcclxuICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XHJcbiAgY29uc3QgcGF0aCA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpO1xyXG4gIGNvbnN0IGtleSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KTtcclxuICBjb25zdCBmaWxlID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVByb3BlcnR5KTtcclxuICBjb25zdCBbb3JpZ2luYWxLZXksIHNldE9yaWdpbmFsS2V5XSA9IHVzZVN0YXRlKGtleSk7XHJcbiAgY29uc3QgW2ZpbGVzVG9VcGxvYWQsIHNldEZpbGVzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpdCBtZWFucyBtZWFucyB0aGF0IHNvbWVvbmUgaGl0IHNhdmUgYW5kIG5ldyBmaWxlIGhhcyBiZWVuIHVwbG9hZGVkXHJcbiAgICAvLyBpbiB0aGlzIGNhc2UgZmxpZXNUb1VwbG9hZCBzaG91bGQgYmUgY2xlYXJlZC5cclxuICAgIC8vIFRoaXMgaGFwcGVucyB3aGVuIHVzZXIgdHVybnMgb2ZmIHJlZGlyZWN0IGFmdGVyIG5ldy9lZGl0XHJcbiAgICBpZiAoXHJcbiAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkgIT09IG9yaWdpbmFsS2V5KSB8fFxyXG4gICAgICAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgIW9yaWdpbmFsS2V5KSB8fFxyXG4gICAgICAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiZcclxuICAgICAgICBBcnJheS5pc0FycmF5KGtleSkgJiZcclxuICAgICAgICBrZXkubGVuZ3RoICE9PSBvcmlnaW5hbEtleS5sZW5ndGgpXHJcbiAgICApIHtcclxuICAgICAgc2V0T3JpZ2luYWxLZXkoa2V5KTtcclxuICAgICAgc2V0RmlsZXNUb1VwbG9hZChbXSk7XHJcbiAgICB9XHJcbiAgfSwgW2tleSwgb3JpZ2luYWxLZXldKTtcclxuICBjb25zdCBvblVwbG9hZCA9IChmaWxlcykgPT4ge1xyXG4gICAgc2V0RmlsZXNUb1VwbG9hZChmaWxlcyk7XHJcbiAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBmaWxlcyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU11bHRpUmVtb3ZlID0gKHNpbmdsZUtleSkgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSAoZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KSB8fCBbXSkuaW5kZXhPZihcclxuICAgICAgc2luZ2xlS2V5LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpbGVzVG9EZWxldGUgPVxyXG4gICAgICBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXTtcclxuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5tYXAoKGN1cnJlbnRQYXRoLCBpKSA9PlxyXG4gICAgICAgIGkgIT09IGluZGV4ID8gY3VycmVudFBhdGggOiBudWxsLFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgbmV3UGFyYW1zID0gZmxhdC5zZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSwgW1xyXG4gICAgICAgIC4uLmZpbGVzVG9EZWxldGUsXHJcbiAgICAgICAgaW5kZXgsXHJcbiAgICAgIF0pO1xyXG4gICAgICBuZXdQYXJhbXMgPSBmbGF0LnNldChuZXdQYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5LCBuZXdQYXRoKTtcclxuICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgIC4uLnJlY29yZCxcclxuICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnWW91IGNhbm5vdCByZW1vdmUgZmlsZSB3aGVuIHRoZXJlIGFyZSBubyB1cGxvYWRlZCBmaWxlcyB5ZXQnLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXHJcbiAgICBGb3JtR3JvdXAsXHJcbiAgICBudWxsLFxyXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcclxuICAgICAgTGFiZWwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSxcclxuICAgICksXHJcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lLCB7XHJcbiAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn0J/QtdGA0LXRgtCw0YnQuNGC0LUg0YTQsNC50Lsg0YHRjtC00LAg0LjQu9C4INC90LDQttC80LjRgtC1LCDRh9GC0L7QsdGLINCy0YvQsdGA0LDRgtGMJyxcclxuICAgICAgICBhY2NlcHRlZFNpemU6ICfQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0YDQsNC30LzQtdGAOiB7e21heFNpemV9fScsXHJcbiAgICAgICAgYWNjZXB0ZWRUeXBlOiAn0J/QvtC00LTQtdGA0LbQuNCy0LDQtdC80YvQtSDRgtC40L/Rizoge3ttaW1lVHlwZXN9fScsXHJcbiAgICAgICAgdW5zdXBwb3J0ZWRTaXplOiAn0KTQsNC50Lsge3tmaWxlTmFtZX19INGB0LvQuNGI0LrQvtC8INCx0L7Qu9GM0YjQvtC5JyxcclxuICAgICAgICB1bnN1cHBvcnRlZFR5cGU6XHJcbiAgICAgICAgICAn0KTQsNC50Lsge3tmaWxlTmFtZX19INC40LzQtdC10YIg0L3QtdC/0L7QtNC00LXRgNC20LjQstCw0LXQvNGL0Lkg0YLQuNC/OiB7e2ZpbGVUeXBlfX0nLFxyXG4gICAgICB9LFxyXG4gICAgICBvbkNoYW5nZTogb25VcGxvYWQsXHJcbiAgICAgIG11bHRpcGxlOiBjdXN0b20ubXVsdGlwbGUsXHJcbiAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgbWltZVR5cGVzOiBjdXN0b20ubWltZVR5cGVzLFxyXG4gICAgICAgIG1heFNpemU6IGN1c3RvbS5tYXhTaXplLFxyXG4gICAgICB9LFxyXG4gICAgICBmaWxlczogZmlsZXNUb1VwbG9hZCxcclxuICAgIH0pLFxyXG4gICAgIWN1c3RvbS5tdWx0aXBsZSAmJlxyXG4gICAgICBrZXkgJiZcclxuICAgICAgcGF0aCAmJlxyXG4gICAgICAhZmlsZXNUb1VwbG9hZC5sZW5ndGggJiZcclxuICAgICAgZmlsZSAhPT0gbnVsbCAmJlxyXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwge1xyXG4gICAgICAgIGZpbGVuYW1lOiBrZXksXHJcbiAgICAgICAgc3JjOiBwYXRoLFxyXG4gICAgICAgIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmUsXHJcbiAgICAgIH0pLFxyXG4gICAgY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBrZXkubGVuZ3RoICYmIHBhdGhcclxuICAgICAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgUmVhY3QuRnJhZ21lbnQsXHJcbiAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAga2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB3aGVuIHdlIHJlbW92ZSBpdGVtcyB3ZSBzZXQgb25seSBwYXRoIGluZGV4IHRvIG51bGxzLlxyXG4gICAgICAgICAgICAvLyBrZXkgaXMgc3RpbGwgdGhlcmUuIFRoaXMgaXMgYmVjYXVzZVxyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxyXG4gICAgICAgICAgICAvLyB3ZXJlIHJlbW92ZWQgYW5kIGRpc3BsYXkgb25seSB3aGF0IHdhcyBsZWZ0XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcGF0aFtpbmRleF07XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aFxyXG4gICAgICAgICAgICAgID8gUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAga2V5OiBzaW5nbGVLZXksXHJcbiAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBzaW5nbGVLZXksXHJcbiAgICAgICAgICAgICAgICAgIHNyYzogcGF0aFtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlOiAoKSA9PiBoYW5kbGVNdWx0aVJlbW92ZShzaW5nbGVLZXkpLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKVxyXG4gICAgICA6ICcnLFxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XHJcbiIsImV4cG9ydCBjb25zdCBBdWRpb01pbWVUeXBlcyA9IFtcbiAgICAnYXVkaW8vYWFjJyxcbiAgICAnYXVkaW8vbWlkaScsXG4gICAgJ2F1ZGlvL3gtbWlkaScsXG4gICAgJ2F1ZGlvL21wZWcnLFxuICAgICdhdWRpby9vZ2cnLFxuICAgICdhcHBsaWNhdGlvbi9vZ2cnLFxuICAgICdhdWRpby9vcHVzJyxcbiAgICAnYXVkaW8vd2F2JyxcbiAgICAnYXVkaW8vd2VibScsXG4gICAgJ2F1ZGlvLzNncHAyJyxcbl07XG5leHBvcnQgY29uc3QgVmlkZW9NaW1lVHlwZXMgPSBbXG4gICAgJ3ZpZGVvL3gtbXN2aWRlbycsXG4gICAgJ3ZpZGVvL21wZWcnLFxuICAgICd2aWRlby9vZ2cnLFxuICAgICd2aWRlby9tcDJ0JyxcbiAgICAndmlkZW8vd2VibScsXG4gICAgJ3ZpZGVvLzNncHAnLFxuICAgICd2aWRlby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IEltYWdlTWltZVR5cGVzID0gW1xuICAgICdpbWFnZS9ibXAnLFxuICAgICdpbWFnZS9naWYnLFxuICAgICdpbWFnZS9qcGVnJyxcbiAgICAnaW1hZ2UvcG5nJyxcbiAgICAnaW1hZ2Uvc3ZnK3htbCcsXG4gICAgJ2ltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbicsXG4gICAgJ2ltYWdlL3RpZmYnLFxuICAgICdpbWFnZS93ZWJwJyxcbl07XG5leHBvcnQgY29uc3QgQ29tcHJlc3NlZE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1iemlwJyxcbiAgICAnYXBwbGljYXRpb24veC1iemlwMicsXG4gICAgJ2FwcGxpY2F0aW9uL2d6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnLFxuICAgICdhcHBsaWNhdGlvbi94LXRhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtN3otY29tcHJlc3NlZCcsXG5dO1xuZXhwb3J0IGNvbnN0IERvY3VtZW50TWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi94LWFiaXdvcmQnLFxuICAgICdhcHBsaWNhdGlvbi94LWZyZWVhcmMnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rJyxcbiAgICAnYXBwbGljYXRpb24vbXN3b3JkJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5yYXInLFxuICAgICdhcHBsaWNhdGlvbi9ydGYnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG5dO1xuZXhwb3J0IGNvbnN0IFRleHRNaW1lVHlwZXMgPSBbXG4gICAgJ3RleHQvY3NzJyxcbiAgICAndGV4dC9jc3YnLFxuICAgICd0ZXh0L2h0bWwnLFxuICAgICd0ZXh0L2NhbGVuZGFyJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICd0ZXh0L3BsYWluJyxcbiAgICAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcbiAgICAnYXBwbGljYXRpb24veG1sJyxcbiAgICAndGV4dC94bWwnLFxuXTtcbmV4cG9ydCBjb25zdCBCaW5hcnlEb2NzTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9lcHViK3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3BkZicsXG5dO1xuZXhwb3J0IGNvbnN0IEZvbnRNaW1lVHlwZXMgPSBbXG4gICAgJ2ZvbnQvb3RmJyxcbiAgICAnZm9udC90dGYnLFxuICAgICdmb250L3dvZmYnLFxuICAgICdmb250L3dvZmYyJyxcbl07XG5leHBvcnQgY29uc3QgT3RoZXJNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgJ2FwcGxpY2F0aW9uL3gtY3NoJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFwcGxlLmluc3RhbGxlcit4bWwnLFxuICAgICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2gnLFxuICAgICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcsXG4gICAgJ3ZuZC52aXNpbycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tb3ppbGxhLnh1bCt4bWwnLFxuXTtcbmV4cG9ydCBjb25zdCBNaW1lVHlwZXMgPSBbXG4gICAgLi4uQXVkaW9NaW1lVHlwZXMsXG4gICAgLi4uVmlkZW9NaW1lVHlwZXMsXG4gICAgLi4uSW1hZ2VNaW1lVHlwZXMsXG4gICAgLi4uQ29tcHJlc3NlZE1pbWVUeXBlcyxcbiAgICAuLi5Eb2N1bWVudE1pbWVUeXBlcyxcbiAgICAuLi5UZXh0TWltZVR5cGVzLFxuICAgIC4uLkJpbmFyeURvY3NNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG4gICAgLi4uRm9udE1pbWVUeXBlcyxcbiAgICAuLi5PdGhlck1pbWVUeXBlcyxcbl07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1ZGlvTWltZVR5cGVzLCBJbWFnZU1pbWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzL21pbWUtdHlwZXMudHlwZS5qcyc7XG5jb25zdCBTaW5nbGVGaWxlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBwYXRoLCBtaW1lVHlwZSwgd2lkdGggfSA9IHByb3BzO1xuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBJbWFnZU1pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogcGF0aCwgc3R5bGU6IHsgbWF4SGVpZ2h0OiB3aWR0aCwgbWF4V2lkdGg6IHdpZHRoIH0sIGFsdDogbmFtZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbWVUeXBlICYmIEF1ZGlvTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIiwgeyBjb250cm9sczogdHJ1ZSwgc3JjOiBwYXRoIH0sXG4gICAgICAgICAgICAgICAgXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGVcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImF1ZGlvXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0cmFja1wiLCB7IGtpbmQ6IFwiY2FwdGlvbnNcIiB9KSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGFzOiBcImFcIiwgaHJlZjogcGF0aCwgbWw6IFwiZGVmYXVsdFwiLCBzaXplOiBcInNtXCIsIHJvdW5kZWQ6IHRydWUsIHRhcmdldDogXCJfYmxhbmtcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IFwiRG9jdW1lbnREb3dubG9hZFwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtcjogXCJkZWZhdWx0XCIgfSksXG4gICAgICAgICAgICBuYW1lKSkpO1xufTtcbmNvbnN0IEZpbGUgPSAoeyB3aWR0aCwgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5O1xuICAgIGxldCBwYXRoID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KTtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgPyBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA6IGN1c3RvbS5rZXlQcm9wZXJ0eSk7XG4gICAgY29uc3QgbWltZVR5cGUgPSBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eVxuICAgICAgICAmJiBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLm1pbWVUeXBlUHJvcGVydHkpO1xuICAgIGlmICghcHJvcGVydHkuY3VzdG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgICAgICAgICBwYXRoID0gYCR7Y3VzdG9tLm9wdHMuYmFzZVVybH0vJHtuYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZUZpbGUsIHsgcGF0aDogcGF0aCwgbmFtZTogbmFtZSwgd2lkdGg6IHdpZHRoLCBtaW1lVHlwZTogbWltZVR5cGUgfSkpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gY3VzdG9tLm9wdHMuYmFzZVVybCB8fCAnJztcbiAgICAgICAgcGF0aCA9IHBhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gYCR7YmFzZVVybH0vJHtuYW1lW2luZGV4XX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZUZpbGUsIHsga2V5OiBzaW5nbGVQYXRoLCBwYXRoOiBzaW5nbGVQYXRoLCBuYW1lOiBuYW1lW2luZGV4XSwgd2lkdGg6IHdpZHRoLCBtaW1lVHlwZTogbWltZVR5cGVbaW5kZXhdIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGaWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcyc7XG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiAxMDAsIC4uLnByb3BzIH0pKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcyc7XG5jb25zdCBTaG93ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGUsIHsgd2lkdGg6IFwiMTAwJVwiLCAuLi5wcm9wcyB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNob3c7XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EYXNoYm9hcmQgPSBEYXNoYm9hcmRcbmltcG9ydCBQaG90byBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9waG90bydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUGhvdG8gPSBQaG90b1xuaW1wb3J0IFVwbG9hZEVkaXRDb21wb25lbnQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWVkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZEVkaXRDb21wb25lbnQgPSBVcGxvYWRFZGl0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkTGlzdENvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkTGlzdENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkTGlzdENvbXBvbmVudCA9IFVwbG9hZExpc3RDb21wb25lbnRcbmltcG9ydCBVcGxvYWRTaG93Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRTaG93Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRTaG93Q29tcG9uZW50ID0gVXBsb2FkU2hvd0NvbXBvbmVudCJdLCJuYW1lcyI6WyJhcGkiLCJBcGlDbGllbnQiLCJEYXNoYm9hcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImRhdGEiLCJzZXREYXRhIiwidXNlcnNDb3VudCIsImFjdGl2ZVVzZXJzN2QiLCJhZG1pbkpTVmVyc2lvbiIsInVzZUVmZmVjdCIsIm1vdW50ZWQiLCJyZXMiLCJnZXREYXNoYm9hcmQiLCJwYXlsb2FkIiwiTnVtYmVyIiwiZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkJveCIsInB4IiwicHkiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJIZWFkZXIiLCJMb2FkZXJCbG9jayIsIkVycm9yUGxhY2Vob2xkZXIiLCJ0ZXh0IiwiRnJhZ21lbnQiLCJDYXJkc1JvdyIsIktwaUNhcmQiLCJ0aXRsZSIsInZhbHVlIiwiZm9ybWF0TnVtYmVyIiwiaGludCIsIm10IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJQYW5lbCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwIiwic3JjIiwiYWx0IiwibWF4V2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJvcGFjaXR5IiwiVGV4dCIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwibWIiLCJIMiIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidmFyaWFudCIsIm1hcmdpblRvcCIsImJvcmRlciIsImJvcmRlclRvcCIsImNoaWxkcmVuIiwicm91bmRlZCIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwiYW5pbWF0aW9uIiwib25Nb3VzZUVudGVyIiwiY3VycmVudFRhcmdldCIsInRyYW5zZm9ybSIsIm9uTW91c2VMZWF2ZSIsIkxhYmVsIiwiYXMiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiTG9hZGVyIiwibiIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJTdHJpbmciLCJQaG90byIsInJlY29yZCIsInByb3BlcnR5IiwidXJsRnJvbVBob3RvVXJsIiwicGFyYW1zIiwicGhvdG9VcmwiLCJrZXkiLCJwaG90byIsIkFkbWluSlMiLCJlbnYiLCJBRE1JTl9BUElfQkFTRV9VUkwiLCJtYXhIZWlnaHQiLCJvYmplY3RGaXQiLCJFZGl0Iiwib25DaGFuZ2UiLCJ0cmFuc2xhdGVQcm9wZXJ0eSIsInVzZVRyYW5zbGF0aW9uIiwiY3VzdG9tIiwicGF0aCIsImZsYXQiLCJnZXQiLCJmaWxlUGF0aFByb3BlcnR5Iiwia2V5UHJvcGVydHkiLCJmaWxlIiwiZmlsZVByb3BlcnR5Iiwib3JpZ2luYWxLZXkiLCJzZXRPcmlnaW5hbEtleSIsImZpbGVzVG9VcGxvYWQiLCJzZXRGaWxlc1RvVXBsb2FkIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib25VcGxvYWQiLCJmaWxlcyIsImhhbmRsZVJlbW92ZSIsImhhbmRsZU11bHRpUmVtb3ZlIiwic2luZ2xlS2V5IiwiaW5kZXgiLCJpbmRleE9mIiwiZmlsZXNUb0RlbGV0ZSIsImZpbGVzVG9EZWxldGVQcm9wZXJ0eSIsIm5ld1BhdGgiLCJtYXAiLCJjdXJyZW50UGF0aCIsImkiLCJuZXdQYXJhbXMiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiRm9ybUdyb3VwIiwibGFiZWwiLCJyZXNvdXJjZUlkIiwiRHJvcFpvbmUiLCJ0cmFuc2xhdGlvbnMiLCJwbGFjZWhvbGRlciIsImFjY2VwdGVkU2l6ZSIsImFjY2VwdGVkVHlwZSIsInVuc3VwcG9ydGVkU2l6ZSIsInVuc3VwcG9ydGVkVHlwZSIsIm11bHRpcGxlIiwidmFsaWRhdGUiLCJtaW1lVHlwZXMiLCJtYXhTaXplIiwiRHJvcFpvbmVJdGVtIiwiZmlsZW5hbWUiLCJvblJlbW92ZSIsIkJ1dHRvbiIsIkljb24iLCJVc2VyQ29tcG9uZW50cyIsIlVwbG9hZEVkaXRDb21wb25lbnQiLCJVcGxvYWRMaXN0Q29tcG9uZW50IiwiVXBsb2FkU2hvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztFQUlBLE1BQU1BLEdBQUcsR0FBRyxJQUFJQyxpQkFBUyxFQUFFO0VBRVosU0FBU0MsU0FBU0EsR0FBRztJQUNsQyxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdDLGdCQUFRLENB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
