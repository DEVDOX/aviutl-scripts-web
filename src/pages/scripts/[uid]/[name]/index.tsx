import {
  mdiAlertCircleOutline,
  mdiCheck,
  mdiClose,
  mdiDownload,
  mdiHeart,
  mdiXml,
} from '@mdi/js';
import { Icon } from '@mdi/react';
import { NextPage } from 'next';
import React, { useState } from 'react';
import cx from 'clsx';
import { Layout } from '@/components/templates';
import { Button } from '@/components/atoms';

const ScriptPage: NextPage = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <Layout>
      <div className="container px-4 mx-auto lg:px-32">
        <div className="grid grid-cols-4 gap-12 my-8">
          <div className="col-span-1">
            <div className="flex flex-col justify-center space-y-6">
              <Button className="bg-blue-500 focus:bg-blue-600">
                <Icon className="w-5 h-5" path={mdiDownload} />
                <span className="text-md">ダウンロード</span>
              </Button>

              {/* ソースが公開されている場合 */}
              {true && (
                <Button>
                  <Icon className="w-5 h-5" path={mdiXml} />
                  <span className="text-md">ソースコードを見る</span>
                </Button>
              )}

              {/* ログインしてるかしてないかで表示を変更 */}
              {true ? (
                <>
                  {isLiked ? (
                    <Button
                      onClick={() => setIsLiked(false)}
                      className="bg-gray-800 border border-red-500 focus:border-red-600"
                    >
                      <Icon className="w-5 h-5 text-red-500" path={mdiHeart} />
                      <span className="text-md">いいねしました</span>
                    </Button>
                  ) : (
                    <Button onClick={() => setIsLiked(true)}>
                      <Icon className="w-5 h-5" path={mdiHeart} />
                      <span className="text-md">いいねする</span>
                    </Button>
                  )}
                </>
              ) : (
                <Button>
                  <Icon className="w-5 h-5" path={mdiHeart} />
                  <span className="text-md">サインインしていいねする</span>
                </Button>
              )}
              <div className="my-8 border-t border-gray-600" />

              {/* <Button className="bg-red-700 focus:bg-red-800">
                <Icon className="w-5 h-5" path={mdiAlertCircleOutline} />
                <span className="text-md">正常動作しません</span>
              </Button>

              <div className="my-8 border-t border-gray-600" /> */}

              <div className="flex items-center p-4 space-x-6 bg-gray-800 rounded">
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5" path={mdiDownload} />
                  <p className="text-md">352</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    className={cx(`w-5 h-5`, isLiked ? `text-red-500` : ``)}
                    path={mdiHeart}
                  />
                  <p className="text-md">17</p>
                </div>
                {true ? (
                  <Icon
                    className="w-5 h-5 font-bold text-green-500"
                    path={mdiCheck}
                  />
                ) : (
                  <Icon
                    className="w-5 h-5 font-bold text-red-500"
                    path={mdiClose}
                  />
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <p className="text-sm font-bold text-gray-400">作成者:</p>
                <div className="flex items-center space-x-4">
                  <img
                    alt="作成者"
                    className="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p className="ml-2 text-gray-200 text-md">rikusen0335</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <p className="text-sm font-bold text-gray-400">投稿日:</p>
                <div className="flex items-center">
                  <p className="text-gray-200 text-md">2021年1月4日</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8">
            <h1 className="mb-2 text-2xl text-white">スーパーグリッチ</h1>
            <p className="mb-4 text-gray-200 text-md">
              AviUtl好きなら誰でも知っている、スーパーグリッチです。エフェクトとして使用でき、極限までグリッチのかかった、クールな表現が可能になります。
            </p>
            <img
              alt="プレビュー"
              className="block w-full h-128"
              src="https://picsum.photos/1920/1080/?random"
            />
            {/* <div className="my-8 border-t border-gray-600"></div> */}

            {/* コメント欄実装 */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

ScriptPage.getInitialProps = async (ctx) => {
  const { uid, name } = ctx.query;
  console.log(uid, name);

  const dummy = {};

  return { uid, name };
};

export default ScriptPage;
