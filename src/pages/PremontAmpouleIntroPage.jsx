import React from "react";
import { motion } from "framer-motion";
import { Droplet, Crosshair, Feather, ShieldCheck, Beaker, Sparkles, Blend } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * 프레망 브랜드 소개서의 앰플 한 페이지 구성
 * - 아이콘 + 키 메시지 요약 (민감/트러블 진정 집중 앰플)
 * - Tailwind + shadcn/ui + framer-motion
 */
export default function PremontAmpouleIntroPage() {
  const features = [
    {
      icon: Crosshair,
      title: "트러블 집중 진정",
      desc:
        "태열·침독 등 예민 부위를 한 방울로 빠르게 달래는 고농축 집중 케어.",
    },
    {
      icon: Feather,
      title: "100% 천연 유래 진정",
      desc:
        "병풀 등 자연 유래 진정/영양 성분으로 연약한 피부에도 순하게 스며들어요.",
    },
    {
      icon: Droplet,
      title: "워터리·무끈적",
      desc:
        "고농축이지만 가볍게 흡수되어 번들거림 없이 산뜻한 마무리.",
    },
    {
      icon: ShieldCheck,
      title: "안심 포뮬러",
      desc:
        "피부과 테스트 완료·무자극 지향. 불필요한 화학 성분을 배제했습니다.",
    },
    {
      icon: Blend,
      title: "믹싱/레이어링",
      desc:
        "국소 1–2방울 또는 로션에 섞어 데일리 영양 앰플로 활용.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Premont Soothing Ampoule</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
            프레망 앰플 – 한 방울로 진정되는 집중 케어
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground">
            예기치 않게 찾아온 아기 피부 트러블, 프레망 앰플 한 방울로 금세 편안하게 진정시켜 보세요.<br />트러블 완화를 위한 집중 영양 & 진정 케어.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">#진정케어</Badge>
            <Badge variant="secondary">#집중영양</Badge>
          </div>

          <div className="text-sm sm:text-base text-muted-foreground">
            <b>피부 타입</b>: 민감성·트러블 피부(신생아 태열·침독 등) &nbsp;|&nbsp; <b>향</b>: 무향(인공향 0%, 자연 유래 성분 향만 약하게)<br /><b>제형</b>: 투명 고농축 앰플(가볍고 산뜻한 수분 에센스 타입)
          </div>
        </motion.div>

        {/* 특장점 그리드 */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 * idx }}
            >
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-muted/50 flex items-center justify-center">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold leading-snug">{f.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 사용 방법 */}
        <div className="mt-8">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-5 sm:p-6">
              <h2 className="text-lg font-semibold mb-2">사용 방법</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                트러블 부위 또는 특별히 진정이 필요한 국소 부위에 1–2방울을 떨어뜨려 부드럽게 두드리듯 흡수시켜 주세요. 필요 시 프레망 로션에 섞어 전체 피부에 추가 영양을 공급할 수 있어요.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 용량/가격 & 주의 문구 */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Badge className="rounded-xl px-3 py-1" variant="outline">용량 50ml</Badge>
            <Badge className="rounded-xl px-3 py-1" variant="outline">정가 59,000원</Badge>
            <Badge className="rounded-xl px-3 py-1" variant="outline">국소 집중/로션 믹싱</Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            ※ 사용 전·후 피부 상태를 관찰해 민감 반응 시 즉시 중단하고 전문의와 상담하세요.
          </div>
        </div>

        {/* 하단 문구와 CTA */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            울긋불긋할수록, 한 방울의 차이.
          </p>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl">자세히 보기</Button>
            <Button variant="outline" className="rounded-2xl">로션/크림과 함께</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
