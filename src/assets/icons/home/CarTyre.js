import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const CarTyre = props => (
  <Svg
    width={50}
    height={47}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M42.969 47H27.344C26.016 47 25 45.964 25 44.61v-9.56c0-.238.156-.397.39-.397.235 0 .391.159.391.398v9.56c0 .875.703 1.592 1.563 1.592h15.625c.86 0 1.562-.717 1.562-1.593V40.31c0-.24.157-.399.39-.399.235 0 .392.16.392.399v4.301c0 1.354-1.016 2.39-2.344 2.39Z"
        fill="#263238"
      />
      <Path
        d="M20.703 43.814C9.297 43.814 0 34.334 0 22.704c0-11.631 9.297-21.11 20.703-21.11 11.406 0 20.703 9.479 20.703 21.11 0 11.63-9.297 21.11-20.703 21.11Zm0-41.424C9.688 2.39.781 11.47.781 22.703c0 11.233 8.906 20.314 19.922 20.314s19.922-9.081 19.922-20.314c0-11.232-8.906-20.313-19.922-20.313Z"
        fill="#263238"
      />
      <Path
        d="M20.703 35.847c-7.11 0-12.89-5.895-12.89-13.144 0-7.249 5.78-13.144 12.89-13.144s12.89 5.895 12.89 13.144c0 7.25-5.78 13.144-12.89 13.144Zm0-25.491c-6.64 0-12.11 5.576-12.11 12.347 0 6.772 5.47 12.348 12.11 12.348s12.11-5.576 12.11-12.348c0-6.77-5.47-12.347-12.11-12.347Z"
        fill="#263238"
      />
      <Path
        d="M20.703 37.44c-7.969 0-14.453-6.611-14.453-14.737 0-8.125 6.484-14.737 14.453-14.737 7.969 0 14.453 6.612 14.453 14.737 0 8.126-6.484 14.738-14.453 14.738Zm0-28.677c-7.5 0-13.672 6.293-13.672 13.94 0 7.648 6.172 13.941 13.672 13.941 7.5 0 13.672-6.293 13.672-13.94 0-7.648-6.172-13.941-13.672-13.941Z"
        fill="#263238"
      />
      <Path
        d="m31.016 26.448-4.141-2.47c.078-.398.156-.876.156-1.275 0-.478-.078-.876-.156-1.274l4.14-2.47c-.468-1.274-1.093-2.47-1.953-3.425l-4.14 2.47c-.625-.558-1.406-1.036-2.188-1.275v-4.94c-.625-.079-1.25-.159-1.953-.159-.703 0-1.328.08-1.953.16v4.939c-.86.239-1.562.717-2.187 1.274l-4.141-2.47a11.407 11.407 0 0 0-1.953 3.426l4.14 2.47c-.078.398-.156.876-.156 1.274 0 .478.078.877.156 1.275l-4.14 2.47c.469 1.274 1.094 2.469 1.953 3.425l4.14-2.47c.626.558 1.407 1.036 2.188 1.275v4.939c.625.08 1.25.16 1.953.16.703 0 1.328-.08 1.953-.16v-4.939c.86-.239 1.563-.717 2.188-1.275l4.14 2.47c.86-.956 1.485-2.151 1.954-3.425Zm-10.313-.558c-1.719 0-3.125-1.434-3.125-3.187 0-1.752 1.406-3.186 3.125-3.186s3.125 1.434 3.125 3.186c0 1.753-1.406 3.187-3.125 3.187Z"
        fill="#40C4FF"
      />
      <Path
        d="M22.656 34.095c-.234 0-.39-.16-.39-.398v-4.94a.44.44 0 0 1 .234-.398c.781-.239 1.484-.637 2.031-1.195.157-.08.313-.159.469-.08l4.14 2.47c.157.08.235.319.157.558-.078.16-.313.239-.547.16l-3.906-2.311c-.547.478-1.172.876-1.875 1.115v4.62c.078.16-.078.399-.313.399Zm-3.906 0c-.234 0-.39-.16-.39-.398v-4.62c-.704-.24-1.329-.638-1.876-1.116l-3.906 2.31a.407.407 0 0 1-.547-.16.425.425 0 0 1 .156-.557l4.141-2.47c.156-.079.313-.079.469.08a5.945 5.945 0 0 0 2.031 1.195.44.44 0 0 1 .235.399v4.939c.078.159-.079.398-.313.398Zm12.266-7.25c-.078 0-.157 0-.157-.079l-4.14-2.47c-.157-.079-.235-.238-.157-.398.079-.398.157-.796.157-1.195 0-.398-.078-.796-.157-1.194 0-.16.079-.32.157-.399l4.14-2.47c.157-.079.391-.079.547.16a.425.425 0 0 1-.156.558l-3.906 2.31v1.035c0 .399 0 .717-.078 1.116l3.906 2.31c.156.08.234.319.156.557-.078.08-.234.16-.312.16Zm-20.625 0c-.157 0-.235-.079-.313-.238a.425.425 0 0 1 .156-.558l3.907-2.31c-.079-.319-.079-.637-.079-1.036 0-.398 0-.717.079-1.115l-3.907-2.31c-.156-.08-.234-.319-.156-.558.078-.159.313-.239.547-.159l4.14 2.47c.157.08.235.239.157.398-.078.398-.156.796-.156 1.195 0 .398.078.796.156 1.195 0 .159-.078.318-.156.398l-4.141 2.47c-.078.159-.156.159-.234.159Zm10.312-.557c-1.953 0-3.515-1.593-3.515-3.585 0-1.991 1.562-3.584 3.515-3.584s3.516 1.593 3.516 3.584c0 1.992-1.563 3.585-3.516 3.585Zm0-6.373c-1.484 0-2.734 1.275-2.734 2.788 0 1.514 1.25 2.788 2.734 2.788 1.485 0 2.735-1.274 2.735-2.788 0-1.513-1.25-2.788-2.735-2.788Zm4.14-1.593c-.077 0-.155 0-.234-.08a5.943 5.943 0 0 0-2.03-1.195.44.44 0 0 1-.235-.398V11.71c0-.239.156-.398.39-.398.235 0 .391.16.391.398v4.62c.703.24 1.328.638 1.875 1.116l3.906-2.31c.157-.08.39-.08.547.159a.425.425 0 0 1-.156.557l-4.219 2.47h-.234Zm-8.28 0c-.079 0-.157 0-.235-.08l-4.14-2.47c-.157-.079-.235-.318-.157-.557.078-.16.313-.239.547-.16l3.906 2.311c.547-.478 1.172-.876 1.875-1.115v-4.62c0-.24.157-.399.391-.399s.39.16.39.399v4.939a.44.44 0 0 1-.234.398c-.781.239-1.484.637-2.031 1.195-.156.159-.234.159-.313.159ZM20.703 3.983c-.234 0-.39-.16-.39-.398V1.992c0-.24.156-.399.39-.399.235 0 .39.16.39.399v1.593c0 .239-.155.398-.39.398ZM20.703 43.814c-.234 0-.39-.16-.39-.399v-1.593c0-.239.156-.398.39-.398.235 0 .39.16.39.398v1.593c0 .24-.155.399-.39.399ZM41.016 23.102h-1.563c-.234 0-.39-.16-.39-.399 0-.239.156-.398.39-.398h1.563c.234 0 .39.16.39.398 0 .24-.156.399-.39.399ZM1.953 23.102H.391c-.235 0-.391-.16-.391-.399 0-.239.156-.398.39-.398h1.563c.234 0 .39.16.39.398 0 .24-.155.399-.39.399ZM33.984 9.56c-.078 0-.234 0-.312-.08a.39.39 0 0 1 0-.558l1.094-1.115c.156-.16.39-.16.547 0a.39.39 0 0 1 0 .557L34.218 9.48c-.078.08-.157.08-.235.08ZM6.328 37.76c-.078 0-.234 0-.312-.08a.39.39 0 0 1 0-.558l1.093-1.115c.157-.16.391-.16.547 0a.39.39 0 0 1 0 .557L6.563 37.68s-.157.08-.235.08ZM35.078 37.76c-.078 0-.234 0-.312-.08l-1.094-1.116a.39.39 0 0 1 0-.557c.156-.16.39-.16.547 0l1.093 1.115a.39.39 0 0 1 0 .558c-.078 0-.156.08-.234.08ZM7.422 9.56c-.078 0-.234 0-.313-.08L6.016 8.364a.39.39 0 0 1 0-.557c.156-.16.39-.16.546 0l1.094 1.115a.39.39 0 0 1 0 .558c0 .08-.078.08-.234.08ZM27.89 5.417h-.156c-.234-.08-.312-.319-.234-.558l.625-1.434c.078-.239.313-.318.469-.239.234.08.312.32.234.558l-.625 1.434c0 .16-.156.239-.312.239ZM12.969 42.22h-.156c-.235-.08-.313-.318-.235-.557l.625-1.434c.078-.24.313-.319.547-.24.234.08.313.32.234.559l-.703 1.433c-.078.16-.234.24-.312.24ZM39.453 30.988h-.156l-1.406-.637c-.235-.08-.313-.319-.235-.558.078-.239.313-.318.547-.239l1.406.638c.235.08.313.318.235.557a.428.428 0 0 1-.39.24ZM3.36 15.773h-.157l-1.406-.637c-.234-.08-.313-.319-.234-.478.078-.16.312-.319.546-.24l1.407.638c.234.08.312.319.234.558a.591.591 0 0 1-.39.159ZM13.516 5.417a.429.429 0 0 1-.391-.239L12.5 3.744c-.078-.239 0-.398.234-.558.235-.08.391 0 .547.24l.625 1.433c.078.24 0 .399-.234.558h-.156ZM28.516 42.22a.428.428 0 0 1-.391-.239l-.625-1.434c-.078-.238 0-.398.234-.557.235-.08.391 0 .547.239l.625 1.434c.078.239 0 .398-.234.557h-.156ZM38.047 15.773a.428.428 0 0 1-.39-.24c-.079-.238 0-.397.234-.557l1.406-.637c.234-.08.39 0 .547.239.156.239 0 .398-.235.558l-1.406.637h-.156ZM1.953 30.988a.428.428 0 0 1-.39-.239c-.079-.239 0-.398.234-.557l1.406-.638c.235-.08.39 0 .547.24.156.238 0 .398-.234.557l-1.407.637h-.156ZM46.875 40.707h-3.906c-.235 0-.39-.16-.39-.398v-3.187c0-.239.155-.398.39-.398h3.906c.234 0 .39.159.39.398v3.187c0 .239-.156.398-.39.398Zm-3.516-.797h3.125v-2.39H43.36v2.39Z"
        fill="#263238"
      />
      <Path
        d="M44.922 38.317c2.589 0 4.687-2.14 4.687-4.78s-2.098-4.78-4.687-4.78c-2.589 0-4.688 2.14-4.688 4.78s2.099 4.78 4.688 4.78Z"
        fill="#40C4FF"
      />
      <Path
        d="M44.922 38.715c-2.813 0-5.078-2.31-5.078-5.178 0-2.867 2.265-5.178 5.078-5.178 2.812 0 5.078 2.31 5.078 5.178s-2.266 5.178-5.078 5.178Zm0-9.56c-2.344 0-4.297 1.992-4.297 4.382 0 2.39 1.953 4.382 4.297 4.382 2.344 0 4.297-1.992 4.297-4.382 0-2.39-1.953-4.381-4.297-4.381Z"
        fill="#263238"
      />
      <Path
        d="M44.922 33.936c-.234 0-.39-.16-.39-.399V30.75c0-.239.156-.398.39-.398s.39.16.39.398v2.788c0 .24-.156.399-.39.399ZM36.719 3.186h-.782c-.234 0-.39-.159-.39-.398 0-.239.156-.398.39-.398h.782c.234 0 .39.16.39.398 0 .24-.156.398-.39.398ZM46.094 3.186H38.28c-.234 0-.39-.159-.39-.398 0-.239.156-.398.39-.398h7.813c.234 0 .39.16.39.398 0 .24-.156.398-.39.398ZM48.438.797h-7.813c-.234 0-.39-.16-.39-.399 0-.239.156-.398.39-.398h7.813c.234 0 .39.16.39.398 0 .24-.156.399-.39.399Z"
        fill="#263238"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h50v47H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CarTyre;
